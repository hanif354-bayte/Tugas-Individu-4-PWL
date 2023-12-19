// Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseDate: Date,
  // Add more fields as needed
});

module.exports = mongoose.model('Movie', movieSchema);
