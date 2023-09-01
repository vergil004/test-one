const { src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require('gulp-cssimport')
const autoprefixier = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')
const groupmedia = require('gulp-group-css-media-queries')


//config
const path = require("../config/path");
const app = require("../config/app")

const css = () => {
  return src(path.css.src, { sourcemaps: true })
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(autoprefixier())
    .pipe(shorthand())
    .pipe(groupmedia())
    .pipe(dest(path.css.dest, {sourcemaps: true}))
    .pipe(rename({prefix: "min."}))
    .pipe(csso())
    .pipe(dest(path.css.dest, {sourcemaps: true}))

}

module.exports = css;