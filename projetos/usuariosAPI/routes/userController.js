let users = [];

function listUsers(req, res) {
  const { name } = req.query;
  if (name) {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filtered);
  }
  res.json(users);
}

function getUserById(req, res) {
  const { id } = req.params;
  const user = users.find(u => u.id === Number(id));
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  res.json(user);
}

function createUser(req, res) {
  const { id, name, email } = req.body;

  if (
    typeof id !== 'number' ||
    typeof name !== 'string' ||
    name.length < 3 ||
    typeof email !== 'string' ||
    !email.includes('@') || !email.includes('.')
  ) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  //Verifica ID
  const idExists = users.some(user => user.id === id);
  if (idExists) {
    return res.status(400).json({ error: 'ID reservado' });
  }

  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
}


module.exports = { listUsers, getUserById, createUser };
