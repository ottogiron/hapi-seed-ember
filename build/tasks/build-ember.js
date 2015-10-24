var exec = require('child_process').exec;
var gulp = require('gulp');


var EMBER_ENV = process.env.EMBER_ENV || 'development';

gulp.task('build-ember', function(callback){

  var emberBuild = exec('rm -rf dist && docker run --rm -v `pwd`:/myapp danlynn/ember-cli:1.13.8  build --environment ' + EMBER_ENV, {cwd: 'client'},
    function (error, stdout, stderr) {

      console.log(stdout.toString());
      console.log(stderr.toString());
      return callback(error)
  });

  emberBuild.stdout.on('data', function (data) {
    process.stdout.write(data.toString());
  });

  emberBuild.stderr.on('data', function (data) {
    process.stdout.write(data.toString());
  });

});
