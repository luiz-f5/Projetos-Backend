const app = require('./app');
const sequelize = require('./config/database');
const User = require('./models/userModel');
const bcrypt = require('bcryptjs');

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(async () => {
  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'joao', password: '123456', role: 'user' }
  ];

  for (const u of users) {
    const hashed = await bcrypt.hash(u.password, 10);
    await User.create({ username: u.username, password: hashed, role: u.role });
  }

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });
});
