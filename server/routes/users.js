var express = require('express')
var router = express.Router()

var DbUsers = require('../db/DbUsers')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  DbUsers.getUsers(db)
    .then(users => {
      res.json(users)
    })
})

module.exports = router
