const gulp = require('gulp');
const browsersync = require('browser-sync');
const gulputil = require('gulp-util');
const ghPages = require('gulp-gh-pages');
const rename = require('gulp-rename');
const pug = require('gulp-pug');
// CSS
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const cssnano = require('gulp-cssnano');
const rucksack = require('rucksack-css');
const flexbugs = require('postcss-flexbugs-fixes');
const critical = require('critical').stream;
// Images
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
// JS
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const reload = browsersync.reload;

// Deploy
gulp.task('deploy', () => (
  gulp.src('./dest/**/*')
      .pipe(ghPages())
));


// JS
gulp.task('scripts', () => (
  gulp.src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify().on('error', gulputil.log))
    .pipe(gulp.dest('./dest/js'))
));


// Images
gulp.task('imagemin', () => (
  gulp.src('./src/img/**/*.{gif,jpg,png}')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      use: [pngquant()],
    }))
    .pipe(gulp.dest('./dest/img'))
));


// CSS
gulp.task('css', () => {
  const processors = [
    precss,
    cssnext,
    flexbugs,
    atImport,
    rucksack,
  ];

  return gulp.src('src/css/**/*.css')
    .pipe(postcss(processors))
    .pipe(cssnano({
      discardComments: {
        removeAll: true,
      },
    }))
    .on('error', gulputil.log)
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('dest/css'))
    .pipe(reload({ stream: true }));
});


// Critical CSS
gulp.task('critical', () => (
  gulp.src('dest/*.html')
    .pipe(critical({
      base: 'dest/',
      inline: true,
      src: 'index.html',
      css: ['dest/css/main.css'],
      dest: 'dest/index-critical.html',
      minify: true,
      width: 1300,
      height: 900,
    }))
    .pipe(gulp.dest('dest/'))
));


// Compile Jade
gulp.task('html', () => (
  gulp.src('./src/pug/*.pug')
    .pipe(pug({
      pretty: true,
    }).on('error', gulputil.log))
    .pipe(gulp.dest('./dest'))
    .pipe(reload({ stream: true }))
));


// browser tasks
gulp.task('browsersync', () => (
  browsersync({
    server: {
      baseDir: './dest',
    },
  })
));


// watch
gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./src/img/*.{gif,jpg,png}', ['imagemin']);
  gulp.watch('./src/css/**/*.css', ['css']);
  gulp.watch('./src/pug/**/*.pug', ['html']);
});


// default
gulp.task('default', ['scripts', 'imagemin', 'css', 'html', 'browsersync', 'watch']);
