// server/routes/travelPackages.js
const express = require('express');
const router = express.Router();
const TravelPackage = require('../models/TravelPackage');

// @route GET api/travelPackages

// @desc Get all travel packages
// @access Public
router.get('/', async (req, res) => {
  try {
    const packages = await TravelPackage.find();
    res.json(packages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
      const travelPackage = await TravelPackage.findById(req.params.id);
      if (!travelPackage) {
          return res.status(404).json({ message: 'Travel package not found' });
      }
      res.json(travelPackage);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

module.exports = router;

