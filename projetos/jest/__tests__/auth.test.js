const request = require('supertest');
const app = require('../app');

describe('Autenticação', () => {
  it('deve cadastrar um novo usuário', async () => {
    const res = await request(app).post('/register').send({ email: 'teste@example.com', senha: '123' });
    expect(res.statusCode).toBe(201);
  });

  it('não deve permitir email duplicado', async () => {
    const res = await request(app).post('/register').send({ email: 'teste@example.com', senha: '123' });
    expect(res.statusCode).toBe(400);
  });

  it('deve logar corretamente', async () => {
    const res = await request(app).post('/login').send({ email: 'teste@example.com', senha: '123' });
    expect(res.statusCode).toBe(200);
  });
});