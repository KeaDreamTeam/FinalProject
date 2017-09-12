const getCommentsForRestaurant = (id, db) => {
  return db('comments')
  .join('users', 'comments.user_id', "users.user_id")
  .where('comments.restaurant_id', id)
  .select('comments.*', 'users.user_name')
}

const getRestaurants = (db) => {
  return db('restaurants')
  .select('*')
  .orderBy('restaurant_name')
}

const getComments = (db) => {
  return db('comments')
  .select('*')
}

const saveComment = (comment, db) => {
  return db('comments')
  .insert(comment, 'comment_id')
  .then(comment_id => {
    return db('comments')
    .where('comments.comment_id', comment_id[0])
    .first()
  })
  .catch(err => console.log(err))
}


module.exports = {
  getRestaurants,
  getComments,
  getCommentsForRestaurant,
  saveComment
}
