const express = require('express');
const slugify = require('slugify');
const { Op } = require('sequelize');
const { Content, User, Faculty } = require('../models');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

const authorIncludes = [
  { model: User, as: 'author', attributes: ['id', 'name', 'email', 'role'] },
  { model: Faculty, as: 'faculty', attributes: ['id', 'name', 'slug'] },
];

// Public: list published by type
router.get('/', async (req, res) => {
  try {
    const { type, limit = 50, status = 'published', facultyId } = req.query;
    const where = { status };
    if (type) where.type = type;
    if (facultyId) where.facultyId = facultyId;
    const items = await Content.findAll({
      where,
      include: authorIncludes,
      order: [['publishedAt', 'DESC'], ['createdAt', 'DESC']],
      limit: Math.min(parseInt(limit, 10) || 50, 200),
    });
    res.json({ items });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Public: get one by slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const item = await Content.findOne({
      where: { slug: req.params.slug, status: 'published' },
      include: authorIncludes,
    });
    if (!item) return res.status(404).json({ message: 'Contenu introuvable' });
    item.views = (item.views || 0) + 1;
    await item.save();
    res.json({ item });
  } catch (e) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Admin: list pending / all
router.get('/admin', requireAuth, async (req, res) => {
  const where = {};
  if (req.query.status) where.status = req.query.status;
  if (req.user.role === 'faculty_publisher') {
    where.authorId = req.user.id;
  }
  const items = await Content.findAll({
    where,
    include: authorIncludes,
    order: [['createdAt', 'DESC']],
  });
  res.json({ items });
});

// Create (publisher or admin)
router.post('/', requireAuth, async (req, res) => {
  try {
    const { type, title, excerpt, content, category, coverImage, eventDate, location } = req.body;
    if (!type || !title || !content) return res.status(400).json({ message: 'Champs requis manquants' });
    if (!['article', 'event', 'activity'].includes(type))
      return res.status(400).json({ message: 'Type invalide' });

    let slug = slugify(title, { lower: true, strict: true });
    const exists = await Content.findOne({ where: { slug } });
    if (exists) slug = `${slug}-${Date.now()}`;

    const facultyId =
      req.user.role === 'faculty_publisher' ? req.user.facultyId : req.body.facultyId || null;

    // Super admin auto-publishes; publisher must wait approval
    const status = req.user.role === 'super_admin' ? 'published' : 'pending';
    const publishedAt = status === 'published' ? new Date() : null;

    const item = await Content.create({
      type,
      title,
      slug,
      excerpt,
      content,
      category,
      coverImage,
      eventDate: eventDate || null,
      location,
      authorId: req.user.id,
      facultyId,
      status,
      publishedAt,
    });
    res.status(201).json({ item });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Update (author or super admin)
router.put('/:id', requireAuth, async (req, res) => {
  const item = await Content.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  if (req.user.role !== 'super_admin' && item.authorId !== req.user.id)
    return res.status(403).json({ message: 'Accès refusé' });
  const { title, excerpt, content, category, coverImage, eventDate, location } = req.body;
  if (title && title !== item.title) {
    item.title = title;
    item.slug = slugify(title, { lower: true, strict: true }) + '-' + item.id;
  }
  if (excerpt !== undefined) item.excerpt = excerpt;
  if (content !== undefined) item.content = content;
  if (category !== undefined) item.category = category;
  if (coverImage !== undefined) item.coverImage = coverImage;
  if (eventDate !== undefined) item.eventDate = eventDate;
  if (location !== undefined) item.location = location;
  // Editing puts publisher's content back into pending
  if (req.user.role === 'faculty_publisher') {
    item.status = 'pending';
    item.publishedAt = null;
  }
  await item.save();
  res.json({ item });
});

// Approve / reject (super admin only)
router.post('/:id/approve', requireAuth, requireRole('super_admin'), async (req, res) => {
  const item = await Content.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  item.status = 'published';
  item.publishedAt = new Date();
  item.rejectionReason = null;
  await item.save();
  res.json({ item });
});

router.post('/:id/reject', requireAuth, requireRole('super_admin'), async (req, res) => {
  const item = await Content.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  item.status = 'rejected';
  item.rejectionReason = req.body.reason || 'Refusé par administrateur';
  await item.save();
  res.json({ item });
});

router.delete('/:id', requireAuth, async (req, res) => {
  const item = await Content.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Introuvable' });
  if (req.user.role !== 'super_admin' && item.authorId !== req.user.id)
    return res.status(403).json({ message: 'Accès refusé' });
  await item.destroy();
  res.json({ ok: true });
});

module.exports = router;
