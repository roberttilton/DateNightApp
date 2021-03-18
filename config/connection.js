const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'dates_db',
  'root',
  'awesomexb0x',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;