var exec = require('child_process').exec;
var gulp = require('gulp');

gulp.task('ember-bower-install', function(callback){

  var emberBuild =
    exec('docker run  --entrypoint "/usr/local/bin/bower" --rm -v `pwd`:/myapp danlynn/ember-cli:1.13.8 install --allow-root',
    {cwd: 'client'},
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
