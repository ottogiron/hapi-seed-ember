
var Hoek = require('hoek');
var Bell = require('bell');

exports.register = function (server, options, next) {

  
    next();
};


exports.register.attributes = {
    name: 'facebook-auth'
};
