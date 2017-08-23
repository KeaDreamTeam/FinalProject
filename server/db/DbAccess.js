const getRestaurants = (db) => {
  return db('restaurants')
    .select('*')
}

const getComments = (db) => {
  return db('comments')
    .select('*')
}

module.exports = {
  getRestaurants,
  getComments
}
