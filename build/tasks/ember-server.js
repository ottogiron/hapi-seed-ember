var gulp = require('gulp');
var exec = require('child_process').exec;

var proxyServer = "http://localhost:" +  process.env.APP_PORT;

gulp.task('ember-server', function(callback){

  var ems = exec('ember server --proxy ' + proxyServer, {cwd: 'client'});

  ems.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  ems.stderr.on('data', function (data) {
    console.log(data.toString());
  });

  return callback();

});
