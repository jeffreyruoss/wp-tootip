const { src, dest, series, watch } = require('gulp');
const minifyCSS = require('gulp-minify-css');
const minifyJS = require('gulp-minify');
const rename = require('gulp-rename');

function minifyCssTask() {
  return src('src/fm-tooltip.css')
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'));
}

function minifyJsTask() {
  return src('src/fm-tooltip.js')
    .pipe(minifyJS({ noSource: true, ext: { min: '.min.js' } }))
    .pipe(dest('dist'));
}

function watchTask() {
  console.log('\x1b[33m\x1b[1m%s\x1b[0m', 'Watching files but manual refresh is required...');
  watch('src/fm-tooltip.css', minifyCssTask);
  watch('src/fm-tooltip.js', minifyJsTask);
}

exports.default = series(minifyCssTask, minifyJsTask);
exports.watch = watchTask;
