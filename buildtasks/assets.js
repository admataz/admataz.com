#!/usr/bin/env node

var fs = require("fs-extra");
var async = require("async");

function init(callback) {
  async.series(
    [
      cb => {
        fs.copy("./src/assets", "./docs/assets", { clobber: true }, cb);
      }
    ],
    err => {
      if (err) {
        return callback(err);
      }
      console.log("Compiled Assets!");
      return callback(null);
    }
  );
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
