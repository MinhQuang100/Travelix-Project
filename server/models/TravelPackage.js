// server/models/TravelPackage.js

const mongoose = require('mongoose');

const TravelPackageSchema = new mongoose.Schema({
  image: { type: String, required: true },
  additionalImages: { type: [String], required: false },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  icons: { type: [String], required: true },
  reviews: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    rating: { type: Number, required: true }
  }
});

module.exports = mongoose.model('TravelPackage', TravelPackageSchema);
