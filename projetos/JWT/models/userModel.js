const bcrypt = require('bcryptjs'); 

class User {
    constructor(id, username, password, role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    async setPassword(password) {
        this.password = await bcrypt.hash(password, 10); 
    }

    async validatePassword(password) {
        return bcrypt.compare(password, this.password); 
    }
}

module.exports = User;