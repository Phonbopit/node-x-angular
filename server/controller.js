const path = require('path');
const mock = require('./response');

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

const heroes = {
  findAll: {
    auth: false,
    handler: (request, reply) => {
      return reply({
        data: mock
      });
    }
  },

  findOne: {
    auth: false,
    handler: (request, reply) => {
      const id = request.params.id;
      return reply({
        data: mock.filter(hero => hero.id == id)[0]
      });
    }
  }
}

module.exports = {
  index,
  heroes
}
