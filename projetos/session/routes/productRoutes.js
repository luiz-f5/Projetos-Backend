const express = require('express')
const { products } = require('../config/database')
const { authenticateSession, authorizeRoles } = require('../middleware/auth')

const router = express.Router()
let nextProductId = 1

router.get('/', authenticateSession, (req, res) => {
  res.status(200).json(products)
})

router.post('/', authenticateSession, authorizeRoles('admin'), (req, res) => {
  const { name, price } = req.body
  if (!name || !price) return res.status(400).json({ message: 'Dados inválidos' })

  const newProduct = { id: nextProductId++, name, price }
  products.push(newProduct)
  res.status(201).json(newProduct)
})

router.delete('/:id', authenticateSession, authorizeRoles('admin'), (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ message: 'Produto não encontrado' })

  products.splice(index, 1)
  res.status(200).json({ message: 'Produto removido' })
})

module.exports = router