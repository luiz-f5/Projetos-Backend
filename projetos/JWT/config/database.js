const { Sequelize } = require('sequelize');

require("dotenv").config();

const password = process.env.DATABASE_PASS;
const user = process.env.DATABASE_USER;
const database = process.env.DATABASE_NAME;
const URI = `mysql://${user}:${password}@localhost:3306/${database}`;
const sequelize = new Sequelize(URI);

module.exports = sequelize;