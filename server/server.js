const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Logging middleware to debug requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Import and use routes
const userRoutes = require('./routes/user').router;
const bookingRoutes = require('./routes/booking');

app.use('/api', require('./routes/api'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', userRoutes); 
app.use('/api/bookings', bookingRoutes); // Ensure this is correctly set up
app.use('/api/contact', require('./routes/contact'));
app.use('/api/travelPackages', require('./routes/travelPackages'));
app.use('/api/offers', require('./routes/offers'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

// Catchall handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
