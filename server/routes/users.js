var express = require('express')
var router = express.Router()

var DbUsers = require('../db/DbUsers')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  DbUsers.getUsers(db)
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
})

router.get('/:user_id/comments', (req, res) => {
  let db = req.app.get('db')
  let id = req.params.user_id
  DbUsers.getUserComments(id, db)
    .then(userComments => {
      res.json(userComments)
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
})





module.exports = router
