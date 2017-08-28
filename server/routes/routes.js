var express = require('express')
var router = express.Router()

var decode = require('../auth/token').decode

var DbAccess = require('../db/DbAccess')

router.get('/restaurants/:restaurant_id/comments', (req, res) => {
  let db = req.app.get('db')
  let id = req.params.restaurant_id
  DbAccess.getCommentsForRestaurant(id, db)
    .then(restaurantComments => {
      res.json(restaurantComments)
  })
})

router.get('/restaurants/:restaurant_id/ratings', (req, res) => {
  let db = req.app.get('db')
  let id = req.params.restaurant_id
  DbAccess.getCommentsForRestaurant(id, db)
    .then(comments => {
        if (comments.length == 0) {
          res.json("No Ratings")
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
        res.json(tally)
      })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
})

router.get('/restaurants', (req, res) => {
  let db = req.app.get('db')
  DbAccess.getRestaurants(db)
      .then(restaurants => {
        res.json(restaurants)
      })
      .catch(err => {
        res.status(500).send({message: err.message})
      })
})

router.get('/comments', (req, res) => {
  let db = req.app.get('db')
  DbAccess.getComments(db)
      .then(comments => {
        res.json(comments)
      })
      .catch(err => {
        res.status(500).send({message: err.message})
      })
})

router.post('/comments', decode, (req, res) => {
  let db = req.app.get('db')
  let comment = req.body
  comment.user_id = req.user.id
  DbAccess.saveComment(comment, db)
      .then(newCommentId => {
        res.sendStatus(201)
      })
      .catch(err => {
        res.status(500).send({message: err.message})
      })
})



module.exports = router
