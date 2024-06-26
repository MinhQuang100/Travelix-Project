const express = require('express');
const router = express.Router();

// Example route
router.get('/offers', (req, res) => {
  res.json({ message: 'List of offers' });
});

module.exports = router;
