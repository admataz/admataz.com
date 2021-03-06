#!/usr/bin/env node

var fs = require("fs-extra");
var async = require("async");
var sass = require("node-sass");

function init(callback) {
  async.series(
    [
      cb => {
        sass.render(
          {
            file: "./src/style/main.scss",
            sourceMap: true,
            outputStyle: "compressed"
          },
          function(err, result) {
            if (err) {
              return cb(err);
            }
            fs.writeFile("./dist/main.css", result.css, cb);
          }
        );
      }
    ],
    err => {
      if (err) {
        console.log("problem");
        return callback(err);
      }
      console.log("Compiled Styles!");
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
    console.log("Compiled Styles!");
  });
}
