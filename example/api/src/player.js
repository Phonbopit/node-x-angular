const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Player = mongoose.model('player', {
  name: String,
  club: String,
  position: String,
  age: Number
});

module.exports = Player;