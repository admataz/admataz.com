var fs = require("fs-extra");
var async = require("async");
var browserify = require("browserify");
var reactify = require("reactify");
var uglify = require("uglify-js");

process.env.NODE_ENV = "production";

function init(callback) {
  async.series(
    [
      cb => {
        var b = browserify({
          transform: [reactify]
        });
        // b.add('./src/components/admataz_logo');
        b.add("./src/components/admataz_blocks");
        b.add("./src/components/client_list");

        b.bundle(function(err, buff) {
          if (err) {
            return cb(err);
          }
          // console.log(buff.toString());
          fs.outputFile(
            "./dist/js/components.js",
            uglify.minify(buff.toString(), { fromString: true }).code,
            cb
          );
          // fs.outputFile('./dist/js/components.js', buff, cb);
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
