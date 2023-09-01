const { src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
//config
const path = require("../config/path");

const img = () => {
  return src(path.img.src)
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(imagemin())
    .pipe(dest(path.img.dest))
}

module.exports = img;