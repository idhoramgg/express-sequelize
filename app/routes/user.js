const express = require('express')
const router = express.Router()

const {
  addUser, getAll, updateUser, deleteUser, getUser
} = require('../controllers/user')

router.post('/user', addUser)
router.get('/user/:id', getUser)
router.get('/user', getAll)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)



module.exports = router