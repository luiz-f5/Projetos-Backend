const request = require('supertest');
const app = require('../app');
const db = require('../config/database');

describe('Notas', () => {
  let agente;

  beforeEach(() => {
    db.usuarios = {};
    agente = request.agent(app);
  });

  it('retorna média correta do aluno', async () => {
    await agente.post('/register').send({ email: 'teste@example.com', senha: '123' });
    await agente.post('/login').send({ email: 'teste@example.com', senha: '123' });

    await agente.post('/notas').send({ aluno: 'João', nota: 8 });
    await agente.post('/notas').send({ aluno: 'João', nota: 6 });

    const res = await agente.get('/notas/João/media');
    expect(res.statusCode).toBe(200);
    expect(res.body.media).toBe(7);
  });
});