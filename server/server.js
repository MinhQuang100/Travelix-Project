// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user')); 

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
