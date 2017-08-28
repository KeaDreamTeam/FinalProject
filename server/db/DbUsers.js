const getUsers = (db) => {
  return db('users')
  .select('*')
}

const getUserComments = (id, db) => {
  return db('comments')
  .where('user_id', id)
}

// const getUsersByUserName = (newUser, db) => {
//   return db('users')
//      .where('user_name', newUser.user_name);
// }
//
// const createUser = (newUser, db) => {
//     return db('users')
//       .insert(newUser)
// }


module.exports = {
  getUsers,
  getUserComments
  // getUsersByUserName,
  // createUser
}
