// movieController.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// CRUD endpoints
// Create
router.post('/', async (req, res) => {
  // Create a new movie
});

// Read
router.get('/', async (req, res) => {
  // Retrieve all movies
});

// Update
router.put('/:id', async (req, res) => {
  // Update a movie by ID
});

// Delete
router.delete('/:id', async (req, res) => {
  // Delete a movie by ID
});

module.exports = router;
