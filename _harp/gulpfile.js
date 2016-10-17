var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
// var harp = require('gulp-harp');


//Src paths
var srcPaths = {
  css: 'public/_src/styl/**/*.styl',
  styl: 'public/_src/styl/main.styl',
  js: 'public/_src/js/**/*.js',
  img: 'public/_src/img/**/*',
  harp: [
    'public/**/*.jade',
    'public/**/*.md',
    'public/**/*.json'
  ],
};

//Build patchs
var buildPaths = {
  build: 'public/assets/**/*',
  css: 'public/assets/css/',
  js: 'public/assets/js/',
  img: 'public/assets/img',
};


//compress Stylus
gulp.task('compress', function () {
  return gulp.src(srcPaths.styl)
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(buildPaths.css));
});


//Minify and concat JS
gulp.task('scripts', function() {
  return gulp.src(srcPaths.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(buildPaths.js))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(buildPaths.js));
});


//Minify images
gulp.task('imageMin', function() {
  gulp.src(srcPaths.img)
    .pipe(imagemin())
    .pipe(gulp.dest(buildPaths.img));
});


// Minify html
gulp.task('minify', function() {
  return gulp.src('public/_src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('public/'));
});


//Watch for changes
gulp.task('watch', function() {
  gulp.watch('_src/*.html', { debounceDelay: 300 }, ['minify']);
  gulp.watch(srcPaths.styl, ['compress']);
  gulp.watch(srcPaths.js, ['scripts']);
})


// Browser Sync
// gulp.task('serve', function() {

//   harp.server(__dirname, {
//     port: 9000
//   }, function () {

//     browserSync({
//       proxy: 'localhost:9000'
//     });

//     gulp.watch(srcPaths.harp, function () { reload(); });

//     gulp.watch(srcPaths.css, ['css']);
//     gulp.watch(srcPaths.img, ['images']);
//     gulp.watch(srcPaths.js, ['js']);

//   });
// });

gulp.task('browser-sync', function() {
  harp.server(__dirname, {
    port: 9000
  }, function () {

    browserSync({
      proxy: 'localhost:9000'
    });

    gulp.watch(srcPaths.harp, function () { reload(); });

    gulp.watch(srcPaths.css, ['css']);
    gulp.watch(srcPaths.js, ['js']);
    gulp.watch(srcPaths.img, ['images']);

  });
});


// Default gulp task to watch
gulp.task('default', [
  'compress',
  'minify',
  'imageMin',
  'scripts',
  'watch',
  'browser-sync'
]);


//Default gulp task to run
gulp.task('build', [
  'compress',
  'minify',
  'imageMin',
  'scripts',
]);

