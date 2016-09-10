var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

var cssFiles = [
    "./dev/vendor/normalize.css",
    "./dev/vendor/skeleton.css",
    "./dev/css/*.scss"
];

module.exports = function(){
         gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
};