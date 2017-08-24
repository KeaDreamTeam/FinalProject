var express = require('express')
var router = express.Router()

var DbUsers = require('../db/DbUsers')

//api/users/
router.get('/', (req, res) => {
  let db = req.app.get('db')
  DbUsers.getUsers(db)
    .then(users => {
      res.json(users)
    })
})

//api/users/:user_id/comments
router.get('/:user_id/comments', (req, res) => {
  let db = req.app.get('db')
  let id = req.params.user_id
  DbUsers.getUserComments(id, db)
    .then(userComments => {
      res.json(userComments)
    })
})

//api/users/signup
router.post('/signup', (req, res) => {
  let db = req.app.get('db')
  let newUser = req.body
  console.log(req.body);
  DbUsers.getUsersByUserName(newUser, db)
    .then(usersFound => {
      if (usersFound.length > 0) {
        res.sendStatus(400, "user already exists!")
      } else {
        DbUsers.createUser(newUser, db)
          .then(newUserId => {
            res.json({user_id: newUserId})
          })
      }
    })
})

// ADD /api/users/login


module.exports = router
