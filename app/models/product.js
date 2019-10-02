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
  }
});

module.exports = Product