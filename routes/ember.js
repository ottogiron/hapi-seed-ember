
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
    });

    if(process.env.EMBER_ENV === 'development'){
      var Yam = require('yam');
      var emberCLI = new Yam('../client/.ember-cli');
      //for dev environment we want to be able to access ember live-reload server
      server.route({
        method: 'GET',
        path: '/ember-cli-live-reload.js',
        handler: {
            proxy: {
                host: 'localhost',
                port: emberCLI.get('port')|| 4200,
                protocol: 'http',
                passThrough: true
            }
          }
      });
    }

    next();
};


exports.register.attributes = {
    name: 'index'
};
