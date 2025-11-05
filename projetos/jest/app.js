require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const db = require('./config/database');
const notasRoutes = require('./routes/notasRoutes');

const app = express();
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.post('/register', async (req, res) => {
  const { email, senha } = req.body;
  if (db.usuarios[email]) return res.status(400).json({ mensagem: 'Email já cadastrado' });

  const senhaHash = await bcrypt.hash(senha, 10);
  db.usuarios[email] = { senhaHash, notas: {} };
  res.status(201).json({ mensagem: 'Usuário registrado com sucesso' });
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const usuario = db.usuarios[email];
  if (!usuario || !(await bcrypt.compare(senha, usuario.senhaHash))) {
    return res.status(400).json({ mensagem: 'Credenciais inválidas' });
  }
  req.session.email = email;
  res.status(200).json({ mensagem: 'Login realizado com sucesso' });
});

app.use(notasRoutes);

module.exports = app;