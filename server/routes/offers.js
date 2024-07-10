const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');

router.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ msg: 'Search query is required' });
  }

  try {
    const offers = await Offer.find({
      $text: { $search: query }
    });

    res.json(offers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
