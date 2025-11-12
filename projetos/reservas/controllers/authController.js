const { generateToken } = require('../utils/jwt');

exports.login = (req, res) => {
  const { id, username, password, role } = req.body;
  if (!id || !username || !password || !role) return res.status(400).json({ error: 'Dados incompletos' });
  const token = generateToken({ id, username, role });
  res.json({ token });
};