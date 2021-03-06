const User = require('../models/user');

module.exports = {
  //create
  addUser: (req, res) => {
    User.create(req.body)
      .then(result => {
        res.send(result);
      }).catch(error => res.send(error))
  },
  getAll: (req, res) => {
    User.findAll({
      //raw true = cheat to menampilkan data raw di sequalize
      raw: true
    })
      .then(result => {
        res.send(result.map(item => {
          console.log(item);
          return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleString(),
            updatedAt: new Date(item.updatedAt).toLocaleString()
          }
        }));
      }).catch(error => res.send(error))
  },
  updateUser: (req, res) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.send(result);
    }).catch(error => res.send(error))
  },
  deleteUser: (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.sendStatus(result);
    }).catch(error => res.send(error))
  },
  getUser: (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.send(result);
    }).catch(error => res.send(error))
  }
}