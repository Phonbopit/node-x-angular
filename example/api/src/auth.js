const JWT = require('jsonwebtoken');
const User = require('./user');

const authValidate = (decoded, request, callback) => {

  User
    .findOne({_id: decoded._id})
    .exec()
    .then(user => {
      if (user) {
        return callback(null, true);
      } else {
        return callback(null, false);
      }
    })
    .catch(error => {
      return callback(null, false);
    });

  // if (decoded.name === 'Chai Phonbopit') {
  //   return callback(null, true);
  // } else {
  //   return callback(null, false);
  // }
}

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    JWT.verify(token, 'super_secret_key', (err, decoded) => {
      if (err !== null) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}

module.exports = {
  authValidate,
  verifyToken
}
