// movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const loggingMiddleware = require('../middleware/loggingMiddleware');

// Apply logging middleware to all movie routes
router.use(loggingMiddleware);

// CRUD routes
router.post('/', authMiddleware, roleMiddleware('admin'), movieController.create);
router.get('/', authMiddleware, movieController.getAll);
router.put('/:id', authMiddleware, roleMiddleware('admin'), movieController.update);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), movieController.remove);

module.exports = router;
