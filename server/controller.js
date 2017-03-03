const path = require('path');

const index = {
  auth: false,
  handler: {
    directory: {
      path: path.join(__dirname, '../dist'),
      listing: false,
      index: ['index.html']
    }
  }
};

module.exports = {
  index
}
