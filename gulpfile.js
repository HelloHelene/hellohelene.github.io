const pug = require('gulp-pug')
const styl = require('gulp-stylus')
const rename = require('gulp-rename')
const gulp = require('gulp')

const data = require('./cv.js')


gulp.task('default', ['styl', 'pug'])

gulp.task('styl', function(done) {
  gulp.src('./styles.styl')
    .pipe(styl())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./'))
    .on('end', done)
})

gulp.task('pug', function(done) {
  gulp.src('template.pug')
    .pipe(pug({
      pretty: true,
      locals: data,
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
    .on('end', done)
})
