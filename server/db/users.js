const hash = require('../auth/hash')


module.exports = {
  createUser,
  userExists,
  getUserByName
}

function createUser (user_name, password, conn) {
  const passwordHash = hash.generate(password)
  console.log("create user", {user_name, password});
  const db = conn
  return db('users')
    .insert({user_name, hash: passwordHash})
}

function userExists (user_name, conn) {
  const db = conn
  return db('users')
    .count('id as n')
    .where('user_name', user_name)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (user_name, conn) {
  const db = conn
  return db('users')
    .select()
    .where('user_name', user_name)
    .first()
}
