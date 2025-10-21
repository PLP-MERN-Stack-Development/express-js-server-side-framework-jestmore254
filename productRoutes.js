// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getStats
} = require('../controllers/productController');
const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validation');

// Routes
router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/stats', getStats);
router.get('/:id', getProductById);
router.post('/', auth, validateProduct, createProduct);
router.put('/:id', auth, validateProduct, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
