// loggingMiddleware.js
const loggingMiddleware = (req, res, next) => {
    // Log relevant information (e.g., timestamp, endpoint, user, etc.)
    next();
  };
  
  module.exports = loggingMiddleware;
  