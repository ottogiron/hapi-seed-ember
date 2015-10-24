var gulp = require('gulp');

gulp.task('build', ['build-ember', 'build-docker'], function(callback){
  
  console.log("buid successful");
  return callback();
});
