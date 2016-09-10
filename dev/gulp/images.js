var gulp = require('gulp');
var image = require('gulp-image');


module.exports = function(){ 
    gulp.src('./dev/img/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/img'));
}