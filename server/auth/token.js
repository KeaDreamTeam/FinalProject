const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')
const hash = require('./hash')
const db = require('../db/users')

module.exports = {
  issueJwt,
  createToken,
  decode
}

function issueJwt (req, res, next) {
  const connection = req.app.get('db')
  verify(req.body.user_name, req.body.password, connection,
    (err, user) => {
      if (err) {
        return res.status(500).json({
          message: 'Authentication failed due to a server error.'
        })
      }
      if (!user) {
        return res.status(403).json({
          message: 'Authentication failed.',
        })
      }
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function verify (user_name, password, connection, callback) {
  db.getUserByName(user_name, connection)
    .then(user => {
      if (!user || user.length === 0 || !hash.verifyUser(user, password)) {
        return callback(null, false)
      }
      delete user.hash
      callback(null, user)
    })
  .catch(err => {
    callback(err, false)
  })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.user_id,
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
