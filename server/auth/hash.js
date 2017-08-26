var bcrypt = require('bcrypt');

function generate (password) {
  var hash = bcrypt.hashSync(password, 12);
  return hash
}

module.exports = {
  generate
}
