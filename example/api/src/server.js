const Hapi = require('hapi');
const server = new Hapi.Server({
  debug: {
    request: ['*']
  }
});

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/simple-api');

const routes = require('./route');

server.connection({
  host: 'localhost',
  port: 3456
});

for (let route of routes) {
  server.route(route);
}

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at ${server.info.uri}`);
});



