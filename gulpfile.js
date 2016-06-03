var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require("gulp-rename");
var stripCssComments = require('gulp-strip-css-comments');

gulp.task('build-dev', function() {
    return gulp
        .src('./src/zeus-dev.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('zeus.css'))
        .pipe(gulp.dest('./bin'));
});

gulp.task('build-prod', ['build-dev'], function() {
    return gulp
        .src('./bin/zeus.css')
        .pipe(stripCssComments({ preserve: false }))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./bin'));
});

gulp.task('build', ['build-dev', 'build-prod']);

gulp.task('default', ['build']);
