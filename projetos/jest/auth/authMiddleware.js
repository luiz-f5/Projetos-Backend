const db = require('../config/database');

function autenticar(req, res, next) {
  if (!req.session.email || !db.usuarios[req.session.email]) {
    return res.status(401).json({ mensagem: 'Não autenticado' });
  }
  next();
}

module.exports = autenticar;