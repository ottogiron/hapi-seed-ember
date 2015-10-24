var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', ['watch', 'ember-server'], function() {

  nodemon({ script: 'server',
            ext: 'html js',
            ignore: 'client/*'
          })
   .on('start', function () {
     console.log('started!');
   });
});
