var express = require('express')
var router = express.Router()

var DbAccess = require('../db/DbAccess')

router.get('/restaurants/:restaurant_id/comments', (req, res) => {
  let db = req.app.get('db')
  let id = req.params.restaurant_id
  DbAccess.getComments_byRest(id, db)
    .then(restaurantComments => {
      res.json(restaurantComments)
  })
})
//ania - finish this part
// router.get('/restaurants/:restaurant_id/ratings', (req, res) => {
//   let db = req.app.get('db')
//   let id = req.params.restaurant_id
//   DbAccess.getRestaurantRating(id, db)
//     .then(rating => {
//       res.json(
//         {
//         restaurant_name: rating.restaurant_name,
//         positive_votes: 10,
//         negative_votes: 20,
//        })
//   })
// })

router.get('/restaurants', (req, res) => {
  let db = req.app.get('db')
  DbAccess.getRestaurants(db)
    .then(restaurants => {
      res.json(restaurants)
    })
})
router.get('/comments', (req, res) => {
  let db = req.app.get('db')
  DbAccess.getComments(db)
    .then(comments => {
      res.json(comments)
    })
})
router.post('/comments', (req, res) => {
  let db = req.app.get('db')
  let comment = req.body
  DbAccess.saveComment(comment, db)
    .then(newCommentId => {
      res.sendStatus(201)
    })
})



module.exports = router
