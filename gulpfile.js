var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var image = require('gulp-image');

gulp.task('sass', function () {
    return gulp.src('./dev/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('index', function () {
   return gulp.src('./dev/index.html')
       .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
   return gulp.src('./dev/js/*.js')
       .pipe(gulp.dest('./dist/js'));
});

gulp.task('bower', function () {
   return gulp.src(
       [
           './bower_components/Flowtype.js/flowtype.js',
           './bower_components/jquery/dist/jquery.min.js'
       ])
       .pipe(gulp.dest('./dist/vendor/'))
});

gulp.task('images', function () {
   return gulp.src('./dev/img/*')
       .pipe(image())
       .pipe(gulp.dest('./dist/img'));
});

gulp.task('default', ['sass', 'images'], function() {
    return gulp.src('./dev/css/*.css');
});

gulp.task('watchSass', function(){
    gulp.watch('./dev/css/*.scss', function () {
        gulp.run('sass');
    })
});