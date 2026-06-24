const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', requireAuth, (req, res) => {
  res.json({
    message: 'Protected profile data',
    user: {
      id: req.user.id,
      email: req.user.email
    }
  });
});

module.exports = router;
