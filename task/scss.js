const { src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixier = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')
const groupmedia = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require("sass"));


//config
const path = require("../config/path");
const app = require("../config/app")

const scss = () => {
  return src(path.scss.src, { sourcemaps: true })
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(sass())
    .pipe(autoprefixier())
    .pipe(shorthand())
    .pipe(groupmedia())
    .pipe(dest(path.scss.dest, {sourcemaps: true}))
    .pipe(rename({prefix: "min."}))
    .pipe(csso())
    .pipe(dest(path.scss.dest, {sourcemaps: true}))

}

module.exports = scss;