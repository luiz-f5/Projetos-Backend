const jwt = require('jsonwebtoken'); 
const users = require('../config/database'); 
const User = require('../models/userModel'); 

exports.register = async (req, res) => {
    const { username, password, role } = req.body;

    const user = new User(Date.now(), username, '', role);
    await user.setPassword(password);

    users.push(user);
    res.status(201).json({ message: 'Usuario criado com sucesso' });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ message: 'Usuario não encontrado' });

    const validPassword = await user.validatePassword(password); 
    if (!validPassword) return res.status(400).json({ message: 'Senha invalida' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' }); 

    res.json({ token });
};