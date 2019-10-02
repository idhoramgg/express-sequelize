const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./config/database')
const app = express()
const userRouter = require('./app/routes/user')

const User = require('./app/models/user')
const Product = require('./app/models/product')

const port = process.env.PORT || 4004;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));

//connect to sequelize

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .then(() => {
    User.sync().then(() => console.log('table created'))
    Product.sync().then(() => console.log(`table created`))
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

 

app.get('/', (req, res)=> res.send('Hello peasant, with express and sequelize'))
app.use('/', userRouter)

app.listen(port, () => console.log(`example app running on port ${port} !`))