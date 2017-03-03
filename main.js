const Hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const hapiAuthJWT = require('hapi-auth-jwt2');

const server = new Hapi.Server();
const routes = require('./server/routes');
const { validateFunc } = require('./server/utils');

server.connection({
  host: 'localhost',
  port: 5000,
  routes: {
    cors: true,
    files: {
      relativeTo: path.join(__dirname, 'dist')
    }
  }
});

server.register([{
  register: inert
}, {
  register: hapiAuthJWT
}], err => {
  if (err) {
    throw err;
  }

  for (let route of routes) {
    server.route(route);
  }

  server.auth.strategy('jwt', 'jwt', {
    key: 'secretKey',
    validateFunc: validateFunc
  });

  server.auth.default('jwt');

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at ${server.info.uri}`);
  });
});

server.ext('onPostHandler', (request, reply) => {
  const response = request.response;
  if (response.isBoom && response.output.statusCode === 404) {
    return reply.file('index.html');
  }
  return reply.continue();
});





