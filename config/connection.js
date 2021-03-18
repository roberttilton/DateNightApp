const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'dates_db',
  'root',
  'password', {
    host: 'localhost',
    dialect: 'mysql',
<<<<<<< HEAD
    port: 3001,
=======
    port: process.env.PORT || 3001,
>>>>>>> 11cc80e37f9c6a33cc61fbf734e0c21e92ef576e
  }
);

module.exports = sequelize;