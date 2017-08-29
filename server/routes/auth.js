
const express = require('express')

const router = express.Router()

const {userExists, createUser} = require('../db/users')
const token = require('../auth/token')

router.post('/register', register, token.issueJwt)

function register (req, res, next) {
  console.log("register route", req.body);
  const {user_name, password} = req.body
  userExists(user_name, req.app.get('db'))
    .then(userExists => {
      if(userExists) {
        return res.status(409).json({message: 'User exists'})
      }
      createUser(user_name, password, req.app.get('db'))
        .then(() => next())
    })
    .catch(err => {
      console.log({err});
      res.status(500).json({message: err.message})
    })

}

router.get('/username', token.decode, (req, res) => {
  const {user_name} = req.user
  res.json({
    user_name
  })
})

router.post('/login', token.issueJwt)

module.exports = router
