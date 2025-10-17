const users = []; 

exports.getUserById = (req, res, next) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(user);
    } catch (err) {
        next(err); 
    }
};


exports.createUser = (req, res, next) => {
    try {
        const { id, name, email } = req.body;

        if (!id || !name || !email) {
            const error = new Error('id, name e email são obrigatórios');
            error.statusCode = 422;
            throw error;
        }

        const userExists = users.find(u => u.email === email);
        if (userExists) {
            const error = new Error('Email já cadastrado');
            error.statusCode = 400;
            throw error;
        }

        const newUser = { id, name, email };
        users.push(newUser);

        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
};
