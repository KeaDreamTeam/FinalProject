var test = require('ava')
var request = require('supertest')
var server = require('../../server/server')
var setupDb = require('../server//setup-db')
var restaurantsDb = require('../../server/db/DbAccess')
var users = require ('../../server/db/users')

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

test('create new user', t => {
  let user = {
    user_name: 'Test user',
    password: 'testing'
  }
   return users.createUser(user.user_name, user.password, t.context.db)
    .then((res) => {
      return users.getUserByName('Test user', t.context.db)
        .then((res) => {
          t.is(res.user_name, 'Test user')
        })
    })
})

test.cb('getUserByName returns correct user', t => {
  users.getUserByName('Liam', t.context.db)
    .then((user) => {
      t.is(user.user_id, 7)
      t.end()
    })
})

test.cb('userExists returns true for existing user', (t) => {
  var user_name = 'Liam'
  users.userExists(user_name, t.context.db)
    .then(doesExist => {
      t.is(doesExist, true)
      t.end()
    })
})

test.cb('userExists returns false for non registered user', (t) => {
  var user_name = 'Happy Harrison'
  users.userExists(user_name, t.context.db)
    .then(doesExist => {
      t.is(doesExist, false)
      t.end()
    })
})

test.cb('getCommentsForRestaurant returns the correct data', (t) => {
  var restaurant_id = 1
  var expectedLength = 4
  restaurantsDb.getCommentsForRestaurant(restaurant_id, t.context.db)
    .then(comments => {
      comments.forEach(comment => t.is(comment.restaurant_id, restaurant_id))
      t.is(comments.length, expectedLength)
      t.end()
    })
})

test.cb('saveComment adds a comment to the correct restaurant', (t) => {
  var originalLength = 4
  var comment = {
    user_id: 1,
    restaurant_id: 1,
    content: 'Very good food, made me a Happy Harrison',
    is_pos: 1,
    is_fair: 1
  }
  restaurantsDb.saveComment(comment, t.context.db)
    .then(dbComment => {
      for (var key in comment) {
        t.is(comment[key], dbComment[key])
      }
      restaurantsDb.getCommentsForRestaurant(comment.restaurant_id, t.context.db)
        .then(comments => {
          t.is(comments.length, originalLength + 1)
          t.end()
        })
    })
})
