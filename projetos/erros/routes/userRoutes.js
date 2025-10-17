const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definindo as rotas e mapeando para os métodos do controlador
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;