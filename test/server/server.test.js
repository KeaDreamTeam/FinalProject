require('dotenv').config()
var test = require('ava')
var request = require('supertest')
var createServer = require('../../server/server')
var setupDb = require('./setup-db')
const decode = require('jwt-decode')

setupDb(test,createServer)


// tests routes/routes.js

test.cb('GET / restaurants returns restaurants', t => {
  request(t.context.app)
  .get('/api/v1/restaurants')
  .expect(200)
  .end((err,res) => {
    if (err) console.log(err);
    t.is(res.body.length, 25)
    t.end()
  })
})

test.cb('GET/ restaurant comment return comment', t => {
  request(t.context.app)
  .get('/api/v1/restaurants/2/comments')
  .expect(200)
  .end((err,res) => {
    if (err) console.log(err);
    t.is(res.body[3].content, "good price and great food")
    t.end()
  })
})

test.cb('GET/ restaurant rating return positive_vote', t => {
  request(t.context.app)
  .get('/api/v1/restaurants/3/ratings')
  .expect(200)
  .end((err,res) => {
    if (err) console.log(err);
    t.true(res.body.positive_vote >= 0)
    t.true(res.body.negative_votes >= 0)
    t.end()
  })
})

test.cb('GET/ each commen return specific content', t => {
  request(t.context.app)
  .get('/api/v1/comments')
  .expect(200)
  .end((err,res) => {
    if (err) console.log(err);
    t.is(res.body[1].content, "all ok!")
    t.end()
  })
})

// tests routes/auth.js

test.cb('POST/ register ', t => {
  const newUser = {
    user_name: 'Magda123',
    name: 'Magda',
    password: 'testpassword'
  }
  const originalCount = 7
  request(t.context.app)
  .post('/api/v1/auth/register')
  .send(newUser)
  .expect(200)
  .end((err, res) => {
    if (err) throw err
    t.true(res.body.hasOwnProperty('token'))
    t.context.db('users')
    .then((users) => {
      t.is(users.length, originalCount + 1)
      t.end()
    })
  })
})

test.cb('POST /login ', t => {
  const existingUser = {
    user_name: 'Liam',
    password: 'password'
  }
  request(t.context.app)
    .post('/api/v1/auth/login')
    .send(existingUser)
    .expect(200)
    .end((err, res) => {
      t.ifError(err)
      t.is(decode(res.body.token).user_name, 'Liam')
        t.end()
    })
})
