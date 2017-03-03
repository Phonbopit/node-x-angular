const controller = require('./controller');

module.exports = [{
  method: 'GET',
  path: '/{path*}',
  config: controller.index
}]
