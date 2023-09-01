const { src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require("gulp-pug");
const app = require("../config/app")

//config
const path = require("../config/path");

const pug = () => {
  return src(path.pug.src)
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(pugs(app.pug))
    .pipe(dest(path.pug.dest))
}

module.exports = pug;