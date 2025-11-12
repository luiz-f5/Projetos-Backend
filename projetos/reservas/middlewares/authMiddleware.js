const { verifyToken } = require('../utils/jwt');

module.exports = (roles = []) => (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token ausente' });

  try {
    const token = authHeader.split(' ')[1];
    const user = verifyToken(token);
    if (roles.length && !roles.includes(user.role)) return res.status(403).json({ error: 'Acesso negado' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
  }
};