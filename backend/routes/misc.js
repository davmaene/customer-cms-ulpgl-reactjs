const express = require('express');
const { Op } = require('sequelize');
const { Faculty, Filiere, Content, Newsletter, ContactMessage, User, Schedule } = require('../models');
const { sendMail } = require('../utils/mailer');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

// Faculties listing
router.get('/faculties', async (req, res) => {
  const items = await Faculty.findAll({
    include: [{ model: Filiere, as: 'filieres' }],
    order: [['name', 'ASC']],
  });
  res.json({ items });
});

router.get('/faculties/:slug', async (req, res) => {
  const item = await Faculty.findOne({
    where: { slug: req.params.slug },
    include: [{ model: Filiere, as: 'filieres' }],
  });
  if (!item) return res.status(404).json({ message: 'Faculté introuvable' });
  res.json({ item });
});

router.get('/faculties/:slug/filieres/:filiereSlug', async (req, res) => {
  const faculty = await Faculty.findOne({ where: { slug: req.params.slug } });
  if (!faculty) return res.status(404).json({ message: 'Faculté introuvable' });
  const filiere = await Filiere.findOne({
    where: { facultyId: faculty.id, slug: req.params.filiereSlug },
  });
  if (!filiere) return res.status(404).json({ message: 'Filière introuvable' });
  res.json({ faculty, filiere });
});

// Search across published content + faculties + filieres
router.get('/search', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.json({ contents: [], faculties: [], filieres: [] });
  const like = { [Op.like]: `%${q}%` };

  const [contents, faculties, filieres] = await Promise.all([
    Content.findAll({
      where: {
        status: 'published',
        [Op.or]: [{ title: like }, { excerpt: like }, { content: like }, { category: like }],
      },
      limit: 20,
      order: [['publishedAt', 'DESC']],
    }),
    Faculty.findAll({
      where: { [Op.or]: [{ name: like }, { domaine: like }, { description: like }] },
      limit: 10,
    }),
    Filiere.findAll({
      where: { [Op.or]: [{ name: like }, { description: like }] },
      include: [{ model: Faculty, as: 'faculty' }],
      limit: 10,
    }),
  ]);

  res.json({ q, contents, faculties, filieres });
});

// Newsletter subscribe
router.post('/newsletter', async (req, res) => {
  try {
    const email = String(req.body.email || '').toLowerCase().trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ message: 'Email invalide' });
    const [sub, created] = await Newsletter.findOrCreate({ where: { email } });
    if (created) {
      // best effort mail
      sendMail({
        to: email,
        subject: "Bienvenue à la newsletter de l'ULPGL",
        html: `<p>Merci pour votre inscription à la newsletter de l'ULPGL-Goma. Vous recevrez nos actualités et événements.</p>`,
      });
    }
    res.json({ ok: true, message: created ? 'Inscription confirmée' : 'Email déjà inscrit' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/newsletter', requireAuth, requireRole('super_admin'), async (req, res) => {
  const items = await Newsletter.findAll({ order: [['createdAt', 'DESC']] });
  res.json({ items });
});

// Contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message)
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    const item = await ContactMessage.create({
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      subject: String(subject).trim(),
      message: String(message).trim(),
    });
    // Notify admin
    sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: `Nouveau message: ${subject}`,
      html: `<h3>Message reçu via le site ULPGL</h3>
        <p><b>De :</b> ${name} &lt;${email}&gt;</p>
        <p><b>Objet :</b> ${subject}</p>
        <p>${message.replace(/\n/g, '<br>')}</p>`,
    });
    res.status(201).json({ ok: true, item: { id: item.id } });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/contact', requireAuth, requireRole('super_admin'), async (req, res) => {
  const items = await ContactMessage.findAll({ order: [['createdAt', 'DESC']] });
  res.json({ items });
});

router.delete('/contact/:id', requireAuth, requireRole('super_admin'), async (req, res) => {
  await ContactMessage.destroy({ where: { id: req.params.id } });
  res.json({ ok: true });
});

// Dashboard stats
router.get('/dashboard/stats', requireAuth, async (req, res) => {
  const isAdmin = req.user.role === 'super_admin';
  const whereAuthor = isAdmin ? {} : { authorId: req.user.id };
  const [total, pending, published, rejected, newsletters, messages, schedulesTotal, schedulesPending] = await Promise.all([
    Content.count({ where: whereAuthor }),
    Content.count({ where: { ...whereAuthor, status: 'pending' } }),
    Content.count({ where: { ...whereAuthor, status: 'published' } }),
    Content.count({ where: { ...whereAuthor, status: 'rejected' } }),
    isAdmin ? Newsletter.count() : Promise.resolve(0),
    isAdmin ? ContactMessage.count({ where: { isRead: false } }) : Promise.resolve(0),
    Schedule.count({ where: whereAuthor }),
    Schedule.count({ where: { ...whereAuthor, status: 'pending' } }),
  ]);
  res.json({ total, pending, published, rejected, newsletters, messages, schedulesTotal, schedulesPending });
});

// Users management (super admin)
router.get('/users', requireAuth, requireRole('super_admin'), async (req, res) => {
  const items = await User.findAll({
    attributes: { exclude: ['password'] },
    include: [{ model: Faculty, as: 'faculty' }],
    order: [['createdAt', 'DESC']],
  });
  res.json({ items });
});

router.put('/users/:id', requireAuth, requireRole('super_admin'), async (req, res) => {
  const u = await User.findByPk(req.params.id);
  if (!u) return res.status(404).json({ message: 'Introuvable' });
  const { name, role, facultyId, isActive } = req.body;
  if (name !== undefined) u.name = name;
  if (role !== undefined) u.role = role;
  if (facultyId !== undefined) u.facultyId = facultyId || null;
  if (isActive !== undefined) u.isActive = isActive;
  await u.save();
  const safe = u.toJSON();
  delete safe.password;
  res.json({ user: safe });
});

module.exports = router;
