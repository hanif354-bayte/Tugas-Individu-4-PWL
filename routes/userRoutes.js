// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const loggingMiddleware = require('../middleware/loggingMiddleware');

// Apply logging middleware to all user routes
router.use(loggingMiddleware);

// Register and login routes
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
