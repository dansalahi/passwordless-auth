const express = require('express');
const jwt = require('jsonwebtoken');
const { sendAuthEmail } = require('../utils/mailer');
const router = express.Router();

const { JWT_SECRET } = process.env;

// Route to request a login link
router.post('/login', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send('Email is required');
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '15m' });
  await sendAuthEmail(email, token);
  res.status(200).send('Login email sent');
});

// Route to verify the token
router.get('/verify', (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).send('Token is required');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.status(200).send(`Welcome ${decoded.email}`);
  } catch (err) {
    res.status(400).send('Invalid or expired token');
  }
});

module.exports = router;
