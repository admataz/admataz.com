var fs = require('fs-extra');
var blockstatic = require('blockstatic');
var async = require('async');


var defaultOptions = {
  "docs": {
    "contact": "./src/content/pages/contact-short.md",
    "about": "./src/content/pages/about-short.md",
    "site-links": "./src/content/pages/site-links.md"
  },
  "data": {
    "common": "./src/content/data/global-content.json"
  },
  "templates": {
    "html": "./src/templates/html.handlebars",
    "page": "./src/templates/page.handlebars"
  }
};


function init(callback){
    async.series([
      (cb) => {
        blockstatic.buildPages('./src/content/articles', './dist/articles', defaultOptions, cb);
      },
      (cb) => {
        blockstatic.buildPages('./src/content/pagedata', './dist', defaultOptions, cb);
      },
      (cb) => {
        blockstatic.buildPages('./src/content/case_studies', './dist/case-studies', defaultOptions, cb);
      }
    ],
      (err) => {
        if (err) {
              return callback(err)
            }
            console.log('Compiled Content!');
            return callback(null);
      }
    );
}


module.exports = init;
if (!module.parent) {
    init(function(err){
        if(err){
            return console.log(err);
        }

        console.log('Compiled Content!');

    })
}
