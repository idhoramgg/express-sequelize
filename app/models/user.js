const Sequelize = require('sequelize')
const sequelize = require('../../config/database')

const User = sequelize.define('user', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: new Date().toLocaleString()
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: new Date().toLocaleString()
  }
},
{
  timestamps: false
});

module.exports = User