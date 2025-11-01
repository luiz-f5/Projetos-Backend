const express = require('express')
const bcrypt = require('bcrypt')
const { users } = require('../config/database')

const router = express.Router()

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body
  if (!username || !password || !role) return res.status(400).json({ message: 'Dados inválidos' })

  const hashedPassword = await bcrypt.hash(password, 10)
  users.push({ username, password: hashedPassword, role })
  res.status(201).json({ message: 'Usuário registrado' })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username)
  if (!user) return res.status(401).json({ message: 'Credenciais inválidas' })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(401).json({ message: 'Credenciais inválidas' })

  req.session.user = { username: user.username, role: user.role }
  res.status(200).json({ message: 'Login registrado' })
})

router.post('/logout', (req, res) => {
  req.session.destroy()
  res.status(200).json({ message: 'Logout realizado' })
})

module.exports = router