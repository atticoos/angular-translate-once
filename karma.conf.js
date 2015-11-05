module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-translate/angular-translate.js',
      'src/*.js',
      'test/**/*.spec.js'
    ],
    reporters: ['dots']
  });
};
