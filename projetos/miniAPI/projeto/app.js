const express = require('express');
const app = express();

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Importa as rotas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const livrosRoutes = require('./routes/livrosRoutes');

// Usa as rotas com prefixo /api
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', livrosRoutes);
app.listen(3000, () => {  console.log('Servidor rodando na porta 3000');});
