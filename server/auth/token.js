const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')
const hash = require('./hash')

const db = require('../db/users')

module.exports = {
  issueJwt,
  createToken,
  decode
}

// function issueJwt (req, res, next) {
//   db.getUserByName(req.body.user_name, req.app.get('db'))
//     .then(user => {
//       if (!user) {
//         return res.status(403).json()
//       }
//       const token = createToken(user, process.env.JWT_SECRET)
//       res.json({
//         message: 'Authentication successful.',
//         token
//       })
//     })
// }

function issueJwt (req, res, next) {
  connection = req.app.get('db')
  verify(req.body.user_name, req.body.password,
    (err, user) => {
      if (err) {
        console.log(err)
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

function verify (user_name, password, callback) {
  db.getUserByName(user_name, connection)
      .then(db => {
        if (db.length === 0 || !hash.verifyUser(db, password)) {
          return callback(null, false)
      }
      const user = db
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
