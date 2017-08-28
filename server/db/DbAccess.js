const getCommentsForRestaurant = (id, db) => {
  return db('comments')
  .join('users', 'comments.user_id', "users.user_id")
  .where('comments.restaurant_id', id)
  .select('comments.*', 'users.user_name')
}

const getRestaurants = (db) => {
  return db('restaurants')
    .select('*')
}

const getComments = (db) => {
  return db('comments')
    .select('*')
}

const saveComment = (comment, db) => {
  return db('comments')
    .insert(comment)
}


module.exports = {
  getRestaurants,
  getComments,
  getCommentsForRestaurant,
  saveComment
}
