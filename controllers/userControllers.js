// userController.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

// Register endpoint
router.post('/register', async (req, res) => {
  // Handle user registration
});

// Login endpoint
router.post('/login', async (req, res) => {
  // Handle user login
});

module.exports = router;
