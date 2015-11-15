
var Hoek = require('hoek');

exports.register = function (server, options, next) {

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
          file: 'client/dist/index.html'
      }
    });

    server.route({
      method: 'GET',
      path: '/assets/{param*}',
      handler: {
        directory: {
          path: 'client/dist/assets'
        }
      }
    })
    next();
};


exports.register.attributes = {
    name: 'index'
};
