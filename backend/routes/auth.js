const express = require('express');
const bcrypt = require('bcryptjs');
const { User, Faculty } = require('../models');
const { sign, requireAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email et mot de passe requis' });
    const user = await User.findOne({
      where: { email: String(email).toLowerCase().trim() },
      include: [{ model: Faculty, as: 'faculty' }],
    });
    if (!user || !user.isActive) return res.status(401).json({ message: 'Identifiants invalides' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Identifiants invalides' });
    const token = sign(user);
    const safeUser = user.toJSON();
    delete safeUser.password;
    res.json({ token, user: safeUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/me', requireAuth, async (req, res) => {
  res.json({ user: req.user });
});

router.post('/register', requireAuth, async (req, res) => {
  // Only super_admin can create new accounts
  if (req.user.role !== 'super_admin')
    return res.status(403).json({ message: 'Seul un super admin peut créer un compte' });
  try {
    const { name, email, password, role, facultyId } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Champs requis manquants' });
    const exists = await User.findOne({ where: { email: email.toLowerCase().trim() } });
    if (exists) return res.status(409).json({ message: 'Email déjà utilisé' });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email: email.toLowerCase().trim(),
      password: hashed,
      role: role === 'super_admin' ? 'super_admin' : 'faculty_publisher',
      facultyId: facultyId || null,
    });
    const safe = user.toJSON();
    delete safe.password;
    res.status(201).json({ user: safe });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
