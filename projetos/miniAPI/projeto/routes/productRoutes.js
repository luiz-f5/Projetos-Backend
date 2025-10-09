const express = require('express');
const router = express.Router();

let products = [];

// GET: lista os produtos
router.get('/products', (req, res) => {  
res.json(products);});

// POST: adiciona um novo produto
router.post('/products', (req, res) => { 
 const newProduct = req.body;  products.push(newProduct);  
 res.status(201).json({ message: 'Produto adicionado com sucesso!', product: newProduct });
 });
 
module.exports = router;
