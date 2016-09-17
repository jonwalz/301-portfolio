var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function () {
    gulp.src('./dev/js/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
};