var gulp = require('gulp');
var exec = require('child_process').exec;

var proxyServer = "http://localhost:" +  process.env.APP_PORT;

gulp.task('ember-server', function(callback){
  exec('cd client && ember server --proxy ' + proxyServer, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});
