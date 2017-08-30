const getUsers = (db) => {
  return db('users')
  .select('*')
}

const getUserComments = (id, db) => {
  return db('comments')
  .where('user_id', id)
}


module.exports = {
  getUsers,
  getUserComments
}
