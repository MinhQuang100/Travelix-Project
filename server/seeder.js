const mongoose = require('mongoose');
const TravelPackage = require('./models/TravelPackage');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const seedData = [
  {
    image: 'images/offer_1.jpg',
    additionalImages: 
      ['images/listing_1.jpg', 'images/listing_2.jpg', 'images/listing_3.jpg'
        , 'images/listing_4.jpg' , 'images/listing_5.jpg' , 'images/listing_6.jpg'
        , 'images/listing_7.jpg', 'images/listing_8.jpg', 'images/listing_9.jpg' 
      ], 
    name: 'grand castle',
    price: 70,
    rating: 4,
    text: 'Explore the grandeur of the historic Grand Castle, nestled in the heart of scenic landscapes. Perfect for those seeking adventure and luxury.',
    icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
    reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.1 }
  },
  {
    image: 'images/offer_1.jpg',
    name: 'great castle',
    price: 70,
    rating: 3,
    text: 'Explore the grandeur of the historic Grand Castle, nestled in the heart of scenic landscapes. Perfect for those seeking adventure and luxury.',
    icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
    reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.2 }
  },
  {
	image: 'images/offer_5.jpg',
	name: 'star hotel',
	price: 50,
	rating: 3,
	text: 'Explore the grandeur of the historic Grand Castle, nestled in the heart of scenic landscapes. Perfect for those seeking adventure and luxury.',
	icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.8 }
  },
  {
	image: 'images/offer_6.jpg',
	name: 'castle grand',
	price: 110,
	rating: 5,
	text: 'Explore the grandeur of the historic Grand Castle, nestled in the heart of scenic landscapes. Perfect for those seeking adventure and luxury.',
	icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.6 }
  },
  {
	image: 'images/offer_7.jpg',
	name: 'hotel eurostar',
	price: 50,
	rating: 4,
	text: 'Explore the grandeur of the historic Grand Castle, nestled in the heart of scenic landscapes. Perfect for those seeking adventure and luxury.',
	icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.4 }
  },
  {
	image: 'images/offer_8.jpg',
	name: 'grand castle',
	price: 90,
	rating: 3,
	text: 'Explore the grandeur of the historic Grand Castle, nestled in the heart of scenic landscapes. Perfect for those seeking adventure and luxury.',
	icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.0 }
  },
];

const seedDB = async () => {
  await TravelPackage.deleteMany({});
  await TravelPackage.insertMany(seedData);
  console.log('Database seeded!');
  mongoose.connection.close();
};

connectDB().then(seedDB);
