var exec = require('child_process').exec;
var gulp = require('gulp');


var EMBER_ENV = process.env.EMBER_ENV || 'development';

gulp.task('build-ember', function(callback){

  exec('rm -rf dist && ember build --environment ' + EMBER_ENV, {cwd: 'client'},
    function (error, stdout, stderr) {
      
      console.log(stdout.toString());
      console.log(stderr.toString());
      return callback(error)
  });

});
