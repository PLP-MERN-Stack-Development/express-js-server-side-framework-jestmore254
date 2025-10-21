// middleware/auth.js
module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  const validKey = process.env.API_KEY || 'mysecretkey';
  if (apiKey !== validKey) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
  }
  next();
};
