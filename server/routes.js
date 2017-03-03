const controller = require('./controller');

module.exports = [{
  method: 'GET',
  path: '/{path*}',
  config: controller.index
}, {
  method: 'GET',
  path: '/api/heroes',
  config: controller.heroes.findAll
}, {
  method: 'GET',
  path: '/api/heroes/{id}',
  config: controller.heroes.findOne
}]
