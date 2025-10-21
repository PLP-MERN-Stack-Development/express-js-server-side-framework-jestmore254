// middleware/errorHandler.js
const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');

function errorHandler(err, req, res, next) {
  console.error(err.message);
  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message });
  }
  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message });
  }
  res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = { errorHandler };
