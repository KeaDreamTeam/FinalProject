var bcrypt = require('bcrypt');

function generate (password) {
  var hash = bcrypt.hashSync(password, 12);
  return hash
}

function getHash (password) {
  return bcrypt.hashSync(password, 12)
}

function verifyUser (user, password) {
  return bcrypt.compareSync(password, user.hash);
}

module.exports = {
  generate,
  getHash,
  verifyUser
}
