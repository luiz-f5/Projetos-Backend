exports.getProfile = (req, res) => {
    res.json({ message: `Bem vindo, usuario com o cargo: ${req.user.role}` }); 
};