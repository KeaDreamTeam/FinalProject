const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const db = require('../db/users')

module.exports = {
  issue,
  createToken,
  decode
}

function issue (req, res) {
  console.log(req.body);
  db.getUserByName(req.body.user_name, req.app.get('db'))
    .then(user => {
      console.log(user);
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    user_name: user.user_name
  }, secret, {
    expiresIn: '1d'
  })

}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}
