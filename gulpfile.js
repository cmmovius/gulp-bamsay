var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var sass = require("gulp-sass");

//define a task with the name of 'default'
// and a callback to perform when the task is ran
gulp.task('default', function() {
  console.log('I am the default task!');
});

gulp.task('date', function(){
  var today = new Date();
  // console.log(today);
  // console.log("Today is " + today);
  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();
  console.log("Today is " + month + '/' + day + '/' + year);
});

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function () {
 return gulp.src('./css/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'));
});
