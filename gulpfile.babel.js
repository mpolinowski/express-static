import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import cleanHTML from 'gulp-htmlclean';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import del from 'del';

const paths = {
  views: {
    src: 'dev/views/**/*.ejs',
    dest: 'build/views/',
  },
  images: {
    src: 'dev/public/images/**/*.{jpg,jpeg,png}',
    dest: 'build/public/images/',
  },
  routes: {
    src: 'dev/routes/**/*.js',
    dest: 'build/routes/',
  },
  styles: {
    src: 'dev/public/stylesheets/**/*.css',
    dest: 'build/public/stylesheets/',
  },
  scripts: {
    src: 'dev/public/javascripts/**/*.js',
    dest: 'build/public/javascripts/',
  },
};


const clean = () => del([ 'assets' ]);
export { clean };

// Clean EJS

export function views() {
  return gulp.src(paths.views.src)
    .pipe(newer(paths.views.dest))
    // Pass through newer files only
    .pipe(cleanHTML())
    .pipe(gulp.dest(paths.views.dest));
}

// Minify Images

export function images() {
  return gulp.src(paths.images.src)
    .pipe(newer(paths.images.dest))
    // Pass through newer files only
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Clean Express Routes

export function routes() {
  return gulp.src(paths.routes.src, { sourcemaps: true })
    .pipe(newer(paths.routes.dest))
    // Pass through newer files only
    .pipe(uglify())
    .pipe(gulp.dest(paths.routes.dest));
}

// Clean CSS

export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(newer(paths.styles.dest))
    // Pass through newer files only
    .pipe(cleanCSS())
    // Pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min',
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

// Clean JS

export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(newer(paths.scripts.dest))
    // Pass through newer files only
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

export function watch() {
  gulp.watch(paths.views.src, views);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.routes.src, routes);
}

// Const build = gulp.series(clean, gulp.parallel(views, images, styles, scripts));
// export { build };

/*
 * Export a default task
 */
export default watch;
