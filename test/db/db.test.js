var test = require('ava')
var request = require('supertest')
var server = require('../../server/server')
var setupDb = require('../server//setup-db')
var restaurantsDb = require('../../server/db/DbAccess')
var usersDb = require ('../../server/db/DbUsers')


setupDb(test, server)


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
// 
// test.only.cb('getUserByName returns correct user', t => {
//   usersDb.getUserByName('Magda', t.context.connection)
//     .then((user) => {
//       t.is(user[0].id, 51)
//       // t.is(user.length, 1)
//       t.end()
//     })
//   })


// total 9 tests
