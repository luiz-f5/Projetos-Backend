const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, productController.getProducts);
router.post('/', authenticateToken, authorizeRoles('admin'), productController.addProduct);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), productController.deleteProduct);

module.exports = router;