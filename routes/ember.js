
var Hoek = require('hoek');
var fs = require('fs');
var path = require('path');

var internals = {
  BASE_PATH: 'client/dist',
  DEFAULT_PATH: 'client/dist/index.html'
};
//It shouldn't be necessary for you to modify this file.
//If you need an additional route consider creating a new one.
exports.register = function (server, options, next) {

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: function(request, reply) {

        if(request.path === '/' ) {
          reply.file(internals.DEFAULT_PATH);
        }
        else {
          var resourcePath = path.join(internals.BASE_PATH, request.path);
          fs.stat(resourcePath, function(err, stat) {
            if(!err && stat.isFile()){
              reply.file(resourcePath);
            }
            else{
              reply.file(internals.DEFAULT_PATH);
            }
          });
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
    name: 'ember',
    dependencies: ['h2o2', 'inert']
};
