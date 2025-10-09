const express = require('express');
const router = express.Router();

// Simula uma lista de usuários
let users = [];

// GET: lista os usuários
router.get('/users', (req, res) => { 
res.json(users);});
 
// POST: adiciona um novo usuário
router.post('/users', (req, res) => {
  const newUser = req.body;  
  users.push(newUser);  
  res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser });
  });
  
module.exports = router;
