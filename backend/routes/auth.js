const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { User, Faculty, PasswordResetToken } = require('../models');
const { sign, requireAuth } = require('../middleware/auth');
const { sendMail } = require('../utils/mailer');

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

// Forgot password — sends email with reset link
router.post('/forgot-password', async (req, res) => {
  try {
    const email = String(req.body.email || '').toLowerCase().trim();
    if (!email) return res.status(400).json({ message: 'Email requis' });
    const user = await User.findOne({ where: { email } });
    // Always return success to avoid leaking which emails exist
    if (!user) return res.json({ ok: true, message: 'Si ce compte existe, un lien a été envoyé.' });

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1h
    await PasswordResetToken.create({ userId: user.id, token, expiresAt });

    const frontendBase = process.env.FRONTEND_URL && process.env.FRONTEND_URL !== '*'
      ? process.env.FRONTEND_URL
      : (req.headers.origin || '');
    const resetLink = `${frontendBase}/reset-password?token=${token}`;

    const mailResult = await sendMail({
      to: user.email,
      subject: 'Réinitialisation de votre mot de passe — ULPGL',
      html: `<p>Bonjour ${user.name},</p>
        <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous (valable 1 heure) :</p>
        <p><a href="${resetLink}">${resetLink}</a></p>
        <p>Si vous n'êtes pas à l'origine de cette demande, ignorez ce message.</p>`,
    });

    // Dev convenience: log the link if mail is skipped
    if (mailResult.skipped) {
      console.log(`[DEV] Password reset link for ${email}: ${resetLink}`);
    }

    res.json({ ok: true, message: 'Si ce compte existe, un lien a été envoyé.', devLink: mailResult.skipped ? resetLink : undefined });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token || !password) return res.status(400).json({ message: 'Token et mot de passe requis' });
    if (password.length < 6) return res.status(400).json({ message: 'Mot de passe trop court (min 6)' });

    const record = await PasswordResetToken.findOne({
      where: { token, usedAt: null, expiresAt: { [Op.gt]: new Date() } },
    });
    if (!record) return res.status(400).json({ message: 'Lien invalide ou expiré' });

    const user = await User.findByPk(record.userId);
    if (!user) return res.status(404).json({ message: 'Compte introuvable' });

    user.password = await bcrypt.hash(password, 10);
    await user.save();
    record.usedAt = new Date();
    await record.save();

    res.json({ ok: true, message: 'Mot de passe mis à jour avec succès' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
