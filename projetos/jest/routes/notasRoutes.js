const express = require('express');
const router = express.Router();
const autenticar = require('../auth/authMiddleware');
const notasController = require('../controllers/notasController');

router.post('/notas', autenticar, notasController.adicionarNota);
router.get('/notas', autenticar, notasController.listarNotas);
router.get('/notas/:aluno/media', autenticar, notasController.mediaAluno);

module.exports = router;