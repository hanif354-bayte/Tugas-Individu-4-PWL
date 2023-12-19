// authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config');

const authMiddleware = (req, res, next) => {
  // Check for token in headers
  // Verify the token
  // If valid, set req.user and call next(); otherwise, send 403
};

module.exports = authMiddleware;
