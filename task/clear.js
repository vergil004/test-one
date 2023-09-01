const del = require("del");

const clear = () => {
  return del('dev');
}

module.exports = clear;