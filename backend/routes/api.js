const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

router.post('/send-email', async (req, res) => {
  try {
    await emailService.sendEmail(req.body.email, req.body.file, req.body.key, req.body.location);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).send({ message: 'An error occurred while sending the email' });
  }
});

module.exports = router;
