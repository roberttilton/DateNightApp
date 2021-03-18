const {
    Model,
    DataTypes
  } = require('sequelize');
  const sequelize = require('../config/connection.js');
  
  // create our User model
  class Dates extends Model {}
  
  Dates.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Dates'
  });

  module.exports = Dates;