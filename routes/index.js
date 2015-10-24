
var Hoek = require('hoek');

exports.register = function (server, options, next) {

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: 'client/dist'
          }
      }
    });
    next();
};


exports.register.attributes = {
    name: 'index'
};
