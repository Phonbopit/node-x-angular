const Hapi = require('hapi');
const inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
const routes = require('./server/routes');

server.connection({
  host: 'localhost',
  port: 5000,
  routes: {
    files: {
      relativeTo: path.join(__dirname, 'dist')
    }
  }
});

server.register(inert, err => {
  if (err) {
    throw err;
  }

  for (let route of routes) {
    server.route(route);
  }

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





