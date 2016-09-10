var gulp = require('gulp');

module.exports = function () {
    gulp.watch('./templates/*.hbs', ['templates']);
    gulp.watch('./dev/css/*.scss', ['sass']);
    gulp.watch(["./dev/js/*.js"], ['js']);
};