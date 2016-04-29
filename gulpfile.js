var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-dev', function() {
    return gulp
        .src('./src/zeus.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./bin'));
});
