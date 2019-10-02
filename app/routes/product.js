const express = require('express')
const router = express.Router()

const {
  addProduct, getAll, updateProduct, deleteProduct, getProduct
} = require('../controllers/product')

router.post('/product', addProduct)
router.get('/product', getAll)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
router.get('/product/:id', getProduct)


module.exports = router