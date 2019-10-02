require('dotenv').config()
const Sequelize = require('sequelize')


const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});



module.exports = sequelize