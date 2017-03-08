var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

gulp.task('build', function() {
    return gulp
        .src('./test.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('zeus.css'))
        .pipe(gulp.dest('./bin'));
});

gulp.task('default', ['build']);
