const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'dates_db',
  'root',
<<<<<<< HEAD
  'password',
  {
=======
  'password', {
>>>>>>> 11cc80e37f9c6a33cc61fbf734e0c21e92ef576e
    host: 'localhost',
    dialect: 'mysql',
    port: process.env.PORT || 3001,
  }
);

module.exports = sequelize;