var
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  cleancss = require('gulp-clean-css'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  watch = require('gulp-watch');

// File locations
var
  source = './dev/',
  dest = './build/',

  images = {
    in: source + 'public/images/**/*',
    out: dest + 'public/images/',
  },

  ejs = {
    in: source + 'views/**/*' + '*.ejs',
    watch: source + 'views/**/*' + '*.ejs',
    out: dest + 'views/',
  },

  css = {
    in: source + 'public/stylesheets/*' + '*.css',
    out: dest + 'public/stylesheets/',
  },

  js = {
    in: source + 'public/javascripts/**/*' + '*.js',
    out: dest + 'public/javascripts/',
  },

  routes = {
    in: source + 'routes/**/*' + '*.js',
    out: dest + 'routes/',
  },

  json = {
    in: source + 'views/**/*' + '*.json',
    out: dest + 'views/',
  },

  ampcss = {
    in: source + 'views/**/*' + '*.css',
    out: dest + 'views/',
  };

// Clean build folder
gulp.task('clean', function() {
  del([
    dest + '*',
  ])
});

// Manage images
gulp.task('images', function() {
  return gulp.src(images.in)
    .pipe(newer(images.out))
    .pipe(imagemin())
    .pipe(gulp.dest(images.out));
});

// Manage json
gulp.task('json', function() {
  return gulp.src(json.in)
    .pipe(newer(json.out))
    .pipe(gulp.dest(json.out));
});

// Manage amp css
gulp.task('ampcss', function() {
  return gulp.src(ampcss.in)
    .pipe(newer(ampcss.out))
    .pipe(cleancss())
    .pipe(gulp.dest(ampcss.out));
});

// Minify EJS files
gulp.task('ejs', function() {
  return gulp.src(ejs.in)
    .pipe(newer(ejs.out))
    .pipe(htmlclean())
    .pipe(gulp.dest(ejs.out));
});

// Minify CSS files
gulp.task('css', function() {
  return gulp.src(css.in)
    .pipe(newer(css.out))
    .pipe(cleancss())
    .pipe(gulp.dest(css.out));
});

// Minify JS files
gulp.task('js', function() {
  return gulp.src(js.in)
    .pipe(newer(js.out))
    .pipe(uglify())
    .pipe(gulp.dest(js.out));
});

// Minify routes
gulp.task('routes', function() {
  return gulp.src(routes.in)
    .pipe(newer(routes.out))
    .pipe(uglify())
    .pipe(gulp.dest(routes.out))
});

// Watch task
gulp.task('watch', function() {

  // Image changes
  gulp.watch(images.in, ['images']);

  // Ejs changes
  gulp.watch(ejs.watch, ['ejs']);

  // Routes changes
  gulp.watch(routes.in, ['routes']);

  // JS changes
  gulp.watch(js.in, ['js']);

  // CSS changes
  gulp.watch(css.in, ['css']);

  // JSON changes
  gulp.watch(json.in, ['json']);

  // Ampcss changes
  gulp.watch(ampcss.in, ['ampcss']);

});

// Build task
gulp.task('build', ['ejs', 'css', 'js', 'routes', 'images', 'json', 'ampcss'], function() {

});

// Default task
gulp.task('default', function() {

  // Default Task

});
