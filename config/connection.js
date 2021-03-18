const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'dates_db',
  'root',
  'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: process.env.PORT || 3310,
  }
);

module.exports = sequelize;