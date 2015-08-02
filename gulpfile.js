var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var buildSettings = require('./config/build/settings');

var production = (process.env.NODE_ENV === 'production');
var webpack = require('webpack');
var webpackConfigPath = './config/build/webpack.' 
                          + (production ? 'production' : 'development');
var webpackConfig = require(webpackConfigPath)
var sassConfig = require('./config/build/sass');

var sassSrc = path.resolve(buildSettings.theme, buildSettings.build.scss)
var jsSrc = path.resolve(buildSettings.theme, buildSettings.build.js)
var cssDist = path.resolve(buildSettings.theme, buildSettings.build.css)

var compiler = webpack(webpackConfig);

gulp.task('default', ['build'])
gulp.task('build', ['build:js', 'build:css'])

gulp.task('build:js', function(done) {
  compiler.run(handleStats(done));
})

gulp.task('build:css', function() {
  return sass(sassSrc, sassConfig)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssDist));
})

gulp.task('dev', ['build:css', 'build:js'], function() {
  gulp.watch(sassSrc+'/**/*.scss', ['build:css']);
  compiler.watch({}, handleStats());
})

function handleStats(done) {
  return function(err, s) {
    var stats = s.toJson();
    if (err) {
      return console.log(err);
    }
    if (stats.errors.length) {
      console.log(stats.errors[1]);
    }
    console.log('JS build completed...')
    if (done) done();
  }
}