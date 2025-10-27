const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/userController'); 
const { authenticateToken, authorizedRoles } = require('../middleware/authMiddleware'); 

router.get('/profile', authenticateToken, userController.getProfile); 
router.get('/admin', authenticateToken, authorizedRoles('admin'), (req, res) => {
    res.json({ message: 'acesso de admin garantido' });
});

module.exports = router;