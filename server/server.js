var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')


var routes = require('./routes/routes')
var auth = require('./routes/auth')
var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('/:number', (req, res) => {
  res.redirect('/#/')
})
server.use('/api/v1/auth', auth)
server.use('/api/v1', routes )


module.exports = function(db) {
  server.set('db', db)
  return server
}
