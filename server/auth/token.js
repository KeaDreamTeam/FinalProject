const jwt = require('jsonwebtoken')

const db = require('../db/users')

module.exports = {
  issue
}

function issue (req, res) {
  db.getUserByName(req.body.user_name)
    .then(user => {
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
