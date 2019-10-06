var fs = require("fs-extra");
var jf = require("jsonfile");
var blockstatic = require("blockstatic");
var async = require("async");

var defaultOptions = {
  docs: {
    contact: "./src/content/pages/contact-short.md",
    about: "./src/content/pages/about-short.md",
    "site-links": "./src/content/pages/site-links.md"
  },
  data: {
    common: "./src/content/data/global-content.json"
  },
  templates: {
    html: "./src/templates/html.handlebars",
    page: "./src/templates/page.handlebars"
  },
  site: {
    title: "admataz - code and javascript",
    home_page_url: "http://admataz.com",
    feed_url: "http://admataz.com/feed.json",
    description: "Site for admataz",
    item_root: "http://admataz.com/"
  },
  rss: {
    title: "admataz - code and javascript",
    home_page_url: "http://admataz.com",
    feed_url: "http://admataz.com/feed.xml",
    description: "Site for admataz",
    item_root: "http://admataz.com/"
  }
};

var articleOptions = Object.assign({}, defaultOptions);
articleOptions.templates = {
  html: "./src/templates/html.handlebars",
  page: "./src/templates/page_article.handlebars"
};

var casestudyOptions = Object.assign({}, defaultOptions);
casestudyOptions.templates = {
  html: "./src/templates/html.handlebars",
  page: "./src/templates/page_article.handlebars"
};

function init(callback) {
  async.series(
    [
      cb => {
        blockstatic.buildPages(
          "./src/content/articles",
          "./dist/articles",
          articleOptions,
          cb
        );
      },
      cb => {
        blockstatic.buildPages(
          "./src/content/pagedata",
          "./dist",
          defaultOptions,
          cb
        );
      },
      cb => {
        blockstatic.buildPages(
          "./src/content/case_studies",
          "./dist/case-studies",
          casestudyOptions,
          cb
        );
      },
      cb => {
        blockstatic.jsonFeedPages(
          "./src/content/articles",
          "/articles",
          articleOptions.site,
          (err, jsonfeed) => {
            if (err) {
              return cb(err);
            }
            return jf.writeFile(`./dist/feed.json`, jsonfeed, cb);
          }
        );
      },
      cb => {
        blockstatic.rssFeedPages(
          "./src/content/articles",
          "/articles",
          articleOptions.rss,
          (err, rssfeed) => {
            if (err) {
              return cb(err);
            }
            return fs.writeFile(`./dist/feed.xml`, rssfeed, cb);
          }
        );
      },
      cb => {
        blockstatic.indexPages(
          "./src/content/articles",
          "/articles",
          (err, jsonindex) => {
            if (err) {
              return cb(err);
            }
            return jf.writeFile(`./dist/articles/index.json`, jsonindex, cb);
          }
        );
      }
    ],
    err => {
      if (err) {
        return callback(err);
      }
      console.log("Compiled Content!");
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
    console.log("Compiled Content!");
  });
}
