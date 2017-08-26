var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')


var routes = require('./routes/routes')
var users = require('./routes/users')
var auth = require('./routes/auth')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', auth)
server.use('/api', routes )
server.use('/api/users', users )


module.exports = function(db) {
  server.set('db', db)
  return server
}
