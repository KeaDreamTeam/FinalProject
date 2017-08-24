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
// ania - finish this part
router.get('/restaurants/:restaurant_id/ratings', (req, res) => {
  let db = req.app.get('db')
  let id = req.params.restaurant_id
  DbAccess.getComments_byRest(id, db)
    .then(comments => {
      if (comments.length == 0) {
        res.json("No Ratings") //there are no ratings for this restaurant
        return
      }
      var tally = {
        positive_vote: 0,
        negative_votes: 0,
        restaurant_name: comments[0].restaurant_name
      }
      comments.forEach(comment => {
        if (comment.is_pos) tally.positive_vote++
        else tally.negative_votes++
      })
      console.log(tally);
      res.json(tally)
  })
})

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
