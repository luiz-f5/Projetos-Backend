const express = require('express');
const userRoutes = require('./routes/userRoutes');
const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
