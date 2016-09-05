var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var image = require('gulp-image');
var uglify = require('gulp-uglify');
var pump = require('pump');

// STYLE FILES

var cssFiles = [
    "./dev/vendor/normalize.css",
    "./dev/vendor/skeleton.css",
    "./dev/css/*.scss"
];


gulp.task('sass', function () {
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(cleanCSS())
        .pipe(concat('all.css'))
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
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('./dev/js/*.js'),
            uglify(),
            gulp.dest('./dist/js')
        ],
        cb
    );
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

gulp.task('default', ['sass', 'images', 'js'], function () {
    return gulp.src('./dev/css/*.css');
});

gulp.task('watch', function () {
    gulp.watch('./dev/css/*.scss', ['sass']);
    gulp.watch(["./dev/js/*.js"], ['js'])
});