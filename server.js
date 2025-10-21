// server.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes and middleware
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const { errorHandler } = require('./middleware/errorHandler');

// ✅ Middleware
app.use(bodyParser.json());

// ✅ Make sure logger is a function before using
if (typeof logger === 'function') {
  app.use(logger);
} else {
  console.warn('⚠️ Logger middleware is not a function. Check ./middleware/logger.js');
}

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// ✅ Product routes
if (productRoutes && typeof productRoutes === 'function') {
  app.use('/api/products', productRoutes);
} else {
  console.warn('⚠️ Product routes not loaded correctly. Check ./routes/productRoutes.js');
}

// ✅ Global error handler
if (typeof errorHandler === 'function') {
  app.use(errorHandler);
} else {
  console.warn('⚠️ Error handler is not a function. Check ./middleware/errorHandler.js');
}

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

module.exports = app;
