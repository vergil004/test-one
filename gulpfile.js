const {  watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

//config
const path = require("./config/path");

//tasks
const pug = require('./task/pug')
const clear = require('./task/clear')
const css = require('./task/css')
const scss = require('./task/scss')
const js = require('./task/js')
const img = require('./task/img')

const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.scss.watch, img).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
}

const server = () => {
  browserSync.init({
    server:{
      baseDir: path.root
    }
  });
}

exports.watch = watcher;
exports.pug = pug;
exports.clear = clear;
exports.css = css;
exports.scss = scss;
exports.img = img;
exports.js = js;

exports.dev = series (
    clear,
    parallel(pug, scss, img, js),
    parallel(watcher, server)
)