const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(400).json({ message: 'Usuario não encontrado' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Senha invalida' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
};
