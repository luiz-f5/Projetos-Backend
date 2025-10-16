const express = require('express');
const app = express();
const sequelize = require('./config/database');
const petRoutes = require('./routes/petRoutes');
const PORT = 3000;

app.use(express.json());
app.use(petRoutes);

sequelize.sync().then(() => {
  console.log('Banco sincronizado.');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
