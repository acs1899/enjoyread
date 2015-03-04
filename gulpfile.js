var gulp = require('gulp'),
    less = require('gulp-less');
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css');

gulp.task('less',function(){
    gulp.src('static/css/*.less')
      .pipe(less({ compress: true }))
      .on('error', function(e){console.log(e);})
      .pipe(gulp.dest('static/css'));
});

gulp.task('watch',function(){
    gulp.watch('static/css/*.less',['less']);
});

gulp.task('default',['less']);
