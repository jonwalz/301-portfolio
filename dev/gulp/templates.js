var gulp = require('gulp'),
    path = require('path'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declar = require('gulp-declare'),
    concat = require('gulp-concat'),
    merge = require('merge-stream');

    module.exports = function () {
      var templates = gulp.src('./dev/templates/*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declar({
          namespace: 'App.templates', 
          noRedeclare: true 
      }));

      // return merged templates
      return merge(templates)
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('./dist/js/'))
    };