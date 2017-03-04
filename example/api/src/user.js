const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = mongoose.model('user', {
  username: {
    type: String,
    unique: true,
    require: true,
    index: { unique: true }
  },
  password: String
});

module.exports = User;