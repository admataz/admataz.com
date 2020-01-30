#!/usr/bin/env node

var fs = require("fs-extra");
var async = require("async");
var browserify = require("browserify");
var uglify = require("uglify-js");

process.env.NODE_ENV = "production";

function init(callback) {
  async.series(
    [
      cb => {
        var b = browserify({});
        b.bundle(function(err, buff) {
          if (err) {
            return cb(err);
          }
          fs.outputFile(
            "./docs/js/components.js",
            uglify.minify(buff.toString()).code,
            cb
          );
        });
      }
    ],
    err => {
      if (err) {
        return callback(err);
      }
      console.log("Compiled Scripts!");
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
    console.log("Compiled Scripts!");
  });
}
