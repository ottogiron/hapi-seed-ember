var gulp = require('gulp');
var spawn = require('child_process').spawn;

var proxyServer = "http://localhost:" +  process.env.APP_PORT;

gulp.task('ember-server', function(callback){

  var ems = spawn('ember', ['server', '--proxy', proxyServer], {cwd: 'client'});

  ems.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  ems.stderr.on('data', function (data) {
    console.log(data.toString());
  });

  callback();
});
