const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package
const bodyParser = require('body-parser'); // Import body-parser package

const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware to parse JSON data and url-encoded data
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// MongoDB URI
const mongoURI = "mongodb://127.0.0.1:27017/Ankita"; 
// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Example Route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
