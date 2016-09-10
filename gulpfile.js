var gulp = require('gulp');

var watch = require('./dev/gulp/watch');
var sassTask = require('./dev/gulp/sass');
var js = require('./dev/gulp/js.js');
var images =require('./dev/gulp/images.js');
var templates = require('./dev/gulp/templates');

gulp.task('sass', sassTask);

gulp.task('js', js);

gulp.task('images', images);

gulp.task('watch', watch);

gulp.task('templates', templates);