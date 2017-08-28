var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var restaurantsDb = require('../../server/db/DbAccess')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET / restaurants returns restaurants', t => {
  request(t.context.app)
    .get('/api/restaurants')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 25)
      t.end()
    })
})

test.cb('read restaurants db', t => {
  restaurantsDb.getRestaurants(t.context.db)
    .then(restaurants => {
      t.true(restaurants[0].hasOwnProperty('address'))
      t.end()
    })
})

test.cb('read comments db', t => {
  restaurantsDb.getComments(t.context.db)
    .then(comments => {
      t.true(comments[0].hasOwnProperty('content'))
      t.end()
    })
})

test.cb('GET / comments', t => {
  request(t.context.app)
    .get('/api/comments')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(comments.length, 5)
      t.end()
    })
})



// test.only.cb('POST /register ', t => {
//   process.env.JWT_SECRET = 'secret'
//   const newUser = {
//     username: 'testuser',
//     name: 'bob bob',
//     password: 'testpassword'
//   }
//
//   const originalCount = 11
//
//   request(t.context.server)
//     .post('/api/register')
//     .send(newUser)
//     .expect(200)
//     .end((err, res) => {
//       if (err) throw err
//       t.context.connection('members')
//       .then((members) => {
//         t.is(members.length, originalCount + 1)
//         t.end()
//       })
//     })
// })
