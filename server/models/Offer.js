const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  image: String,
  additionalImages: [String],
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  icons: [String],
  reviews: {
    title: String,
    subtitle: String,
    rating: Number
  },
}, { timestamps: true });

OfferSchema.index({ name: 'text', text: 'text', 'reviews.title': 'text' });

module.exports = mongoose.model('Offer', OfferSchema, 'travelpackages');
