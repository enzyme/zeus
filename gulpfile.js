'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function () {
  return gulp.src('./sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./bin'));
});
