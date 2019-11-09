#!/usr/bin/env node

var rimraf = require('rimraf');

function init(cb){
    rimraf('./dist', cb)
}

module.exports = init;
if (!module.parent) {
  init(function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("Compiled Assets!");
  });
}