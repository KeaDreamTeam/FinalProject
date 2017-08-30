const hash = require('../auth/hash')

function createUser (user_name, password, conn) {
  const passwordHash = hash.generate(password)
  const db = conn
  return db('users')
  .insert({user_name, hash: passwordHash})
}

function userExists (user_name, conn) {
  const db = conn
  return db('users')
  .count('user_id as n')
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


module.exports = {
  createUser,
  userExists,
  getUserByName
}
