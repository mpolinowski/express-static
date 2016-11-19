var
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin');

// File locations
var
  source = './dev/',
  dest = './build/',
  images = {
    in: source + 'public/images/**/*',
    out: dest + 'public/images/',
  };

// Manage images
gulp.task('images', function() {
  return gulp.src(images.in)
    .pipe(newer(images.out))
    .pipe(imagemin())
    .pipe(gulp.dest(images.out));
});

gulp.task('default', function() {
  // Place code for your default task here
});
