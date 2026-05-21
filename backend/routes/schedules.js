const express = require('express');
const { Op } = require('sequelize');
const { Schedule, Faculty, Filiere, User } = require('../models');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

const includes = [
  { model: Faculty, as: 'faculty', attributes: ['id', 'name', 'slug'] },
  { model: Filiere, as: 'filiere', attributes: ['id', 'name', 'slug'] },
  { model: User, as: 'author', attributes: ['id', 'name', 'email'] },
];

// Public list (published only)
router.get('/', async (req, res) => {
  try {
    const { type, facultyId, promotion, academicYear } = req.query;
    const where = { status: 'published' };
    if (type) where.type = type;
    if (facultyId) where.facultyId = facultyId;
    if (promotion) where.promotion = promotion;
    if (academicYear) where.academicYear = academicYear;
    const items = await Schedule.findAll({ where, include: includes, order: [['startDate', 'DESC'], ['createdAt', 'DESC']] });
    res.json({ items });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Admin list
router.get('/admin', requireAuth, async (req, res) => {
  const where = {};
  if (req.query.status) where.status = req.query.status;
  if (req.user.role === 'faculty_publisher') {
    where.authorId = req.user.id;
  }
  const items = await Schedule.findAll({ where, include: includes, order: [['createdAt', 'DESC']] });
  res.json({ items });
});

router.post('/', requireAuth, async (req, res) => {
  try {
    const { type, title, facultyId, filiereId, promotion, academicYear, semester, startDate, endDate, location, fileUrl, description } = req.body;
    if (!type || !title || !promotion) return res.status(400).json({ message: 'Champs requis manquants' });
    if (!['cours', 'examen'].includes(type)) return res.status(400).json({ message: 'Type invalide' });

    const facId = req.user.role === 'faculty_publisher' ? req.user.facultyId : facultyId;
    if (!facId) return res.status(400).json({ message: 'Faculté requise' });

    const status = req.user.role === 'super_admin' ? 'published' : 'pending';
    const publishedAt = status === 'published' ? new Date() : null;

    const item = await Schedule.create({
      type, title, facultyId: facId, filiereId: filiereId || null, promotion, academicYear, semester,
      startDate: startDate || null, endDate: endDate || null, location, fileUrl, description,
      authorId: req.user.id, status, publishedAt,
    });
    res.status(201).json({ item });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.put('/:id', requireAuth, async (req, res) => {
  const item = await Schedule.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  if (req.user.role !== 'super_admin' && item.authorId !== req.user.id)
    return res.status(403).json({ message: 'Accès refusé' });
  const fields = ['title', 'filiereId', 'promotion', 'academicYear', 'semester', 'startDate', 'endDate', 'location', 'fileUrl', 'description'];
  fields.forEach((f) => { if (req.body[f] !== undefined) item[f] = req.body[f]; });
  if (req.user.role === 'faculty_publisher') {
    item.status = 'pending';
    item.publishedAt = null;
  }
  await item.save();
  res.json({ item });
});

router.post('/:id/approve', requireAuth, requireRole('super_admin'), async (req, res) => {
  const item = await Schedule.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  item.status = 'published';
  item.publishedAt = new Date();
  item.rejectionReason = null;
  await item.save();
  res.json({ item });
});

router.post('/:id/reject', requireAuth, requireRole('super_admin'), async (req, res) => {
  const item = await Schedule.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  item.status = 'rejected';
  item.rejectionReason = req.body.reason || 'Refusé';
  await item.save();
  res.json({ item });
});

router.delete('/:id', requireAuth, async (req, res) => {
  const item = await Schedule.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  if (req.user.role !== 'super_admin' && item.authorId !== req.user.id)
    return res.status(403).json({ message: 'Accès refusé' });
  await item.destroy();
  res.json({ ok: true });
});

module.exports = router;
