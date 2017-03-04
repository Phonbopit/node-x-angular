const Player = require('./player');
const controller = require('./controller');

const Boom = require('boom');

module.exports = [{
  method: 'GET',
  path: '/api/players',
  config: controller.findAll
}, {
  method: 'GET',
  path: '/api/players/{name}',
  config: controller.findOne
}, {
  method: 'POST',
  path: '/api/players',
  config: controller.create
}, {
  method: 'PUT',
  path: '/api/players/{name}',
  config: controller.update
}, {
  method: 'DELETE',
  path: '/api/players/{name}',
  config: controller.delete
}];