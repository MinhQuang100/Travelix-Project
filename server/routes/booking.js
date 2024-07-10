// server/routes/booking.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { auth } = require('./user');

// Create a new booking
router.post('/', auth, async (req, res) => {

  const { packageId, travelDate, numberOfTravelers, specialRequests } = req.body;

  try {
    const newBooking = new Booking({
      package: packageId,
      user: req.user.id,
      travelDate,
      numberOfTravelers,
      specialRequests,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    console.error('Error creating booking:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
