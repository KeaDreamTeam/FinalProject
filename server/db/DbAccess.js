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

module.exports = {
  getRestaurants,
  getComments,
  getComments_byRest
}




// const getDailyMoodById = (id, db) => {
//   return db('dailymoods')
//     .join('users', 'user_id', '=', 'users.id')
//     .join('moods', 'mood_id', '=', 'moods.id')
//     .join('locations', 'location_id', '=', 'locations.id')
//     .select('username', 'mood_name', 'mood_type', 'mood_icon', 'location_name', 'mood_color', 'created_at')
//     .where('users.id', id)
//     // .first()
// }
