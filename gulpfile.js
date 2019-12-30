var gulp = require('gulp');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer')
var rename = require('gulp-rename')

//Concat CSS
gulp.task('css', function() {
  return gulp.src(['./css/icon-font.css', './css/style.comp.css'])
    .pipe(concat('style.concat.css'))
    .pipe(gulp.dest('./css/'));
});

//Add prefix
gulp.task('autoprefixer', gulp.series('css', () => {
  return gulp.src('./css/style.concat.css')
    .pipe(rename('style.prefix.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./css'))
}));

gulp.task('default', gulp.series('autoprefixer'));
