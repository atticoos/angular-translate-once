var gulp = require('gulp'),
    Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
   configFile: __dirname + '/karma.conf.js',
   singleRun: true
 }, done).start();
});

gulp.task('default', ['test']);
