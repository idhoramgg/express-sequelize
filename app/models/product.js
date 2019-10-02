const Sequelize = require('sequelize')
const sequelize = require('../../config/database')

const Product = sequelize.define('product', {
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
  price: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: new Date().toLocaleString()
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: new Date().toLocaleString()
  }
}, {
  timestamps: false
});

module.exports = Product