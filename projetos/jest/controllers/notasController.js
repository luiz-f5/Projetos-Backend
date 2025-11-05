const db = require('../config/database');

exports.adicionarNota = (req, res) => {
  const { aluno, nota } = req.body;
  if (nota < 0 || nota > 10) return res.status(400).json({ mensagem: 'Nota inválida' });

  const usuario = db.usuarios[req.session.email];
  if (!usuario.notas[aluno]) usuario.notas[aluno] = [];
  usuario.notas[aluno].push(nota);

  res.status(201).json({ mensagem: 'Nota adicionada com sucesso!' });
};

exports.listarNotas = (req, res) => {
  const usuario = db.usuarios[req.session.email];
  res.status(200).json(usuario.notas);
};

exports.mediaAluno = (req, res) => {
  const { aluno } = req.params;
  const usuario = db.usuarios[req.session.email];
  const notas = usuario.notas[aluno];

  if (!notas) return res.status(404).json({ mensagem: 'Aluno não encontrado' });

  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  res.status(200).json({ aluno, media });
};