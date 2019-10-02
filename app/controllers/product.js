const Product = require('../models/product')

module.exports = {
  addProduct: (req, res) => {
    Product.create(req.body)
      .then(result => {
        res.send(result);
      }).catch(error => res.send(error))
  },
  getAll: (req, res) => {
    Product.findAll({
      //raw true fungsi dari sequalize untuk menampilkan data raw
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
  updateProduct: (req, res) => {
    Product.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.send(result)
    }).catch(error => res.send(error))
  },
  deleteProduct: (req, res) => {
    Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.sendStatus(result);
    }).catch(error => res.send(error))
  },
  getProduct: (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.send(result);
    }).catch(error => res.send(error))
  }
}