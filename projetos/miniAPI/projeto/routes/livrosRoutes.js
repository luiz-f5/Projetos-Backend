const express = require('express');
const router = express.Router();

let livros = [];

// GET: lista os usuários
router.get('/livros', (req, res) => { 
res.json(livros);});
 
// POST: adiciona um novo usuário
router.post('/livros', (req, res) => {
  const newLivro = req.body;  
  livros.push(newLivro);  
  res.status(201).json({ message: 'Livro adicionado com sucesso!', livros: newLivro });
  });
  
module.exports = router;
