var express = require('express')
var router = express.Router()

var DbAccess = require('../db/DbAccess')

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

module.exports = router
