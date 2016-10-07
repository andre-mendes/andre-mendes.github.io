var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');


//compress Stylus
gulp.task('compress', function () {
  return gulp.src('src/css/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('build/css/'));
});


//Minify and concat JS
var jsFiles = 'src/js/*.js',
    jsDest = 'build/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});


//Minify images
gulp.task('imageMin', function() {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
});


//Minify html
gulp.task('minify', function() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});


//Watch for changes
gulp.task('watch', function(){
    gulp.watch('src/*.html', { debounceDelay: 300 }, ['minify']);
    gulp.watch('src/css/**/*.styl', ['compress']);
    gulp.watch('src/js/**/*.js', ['scripts']);
})


//Browser Sync
gulp.task('browser-sync', function() {
  var files = [
    'build/**/*'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './build/'
    },
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

