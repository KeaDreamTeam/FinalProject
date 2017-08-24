const getComments_byRest = (id, db) => {
  return db('comments')
  .join('restaurants', 'comments.restaurant_id', "restaurants.restaurant_id")
  .where('comments.restaurant_id', id)
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
  getComments_byRest,
  saveComment
}
