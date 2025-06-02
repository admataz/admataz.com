#!/usr/bin/env node

const fs = require("fs").promises;
const jf = require("jsonfile");
const blockstatic = require("blockstatic");
const path = require("path")

    const defaultOptions = {

      docs: {
        "main-nav":  path.resolve(__dirname,"../src/content/docs/main-nav.md"),
        "admataz-logo":  path.resolve(__dirname,"../src/content/docs/admataz-logo.md"),
        "admataz-avatar":  path.resolve(__dirname,"../src/content/docs/admataz-avatar.md")
      },
      // data: {
      //   common: path.resolve(__dirname,"../src/content/data/global-content.json")
      // },
      templates: {
        html:  path.resolve(__dirname,"../src/templates/html.handlebars"),
        page:  path.resolve(__dirname,"../src/templates/page.handlebars")
      },
      site: {
        title: "admataz - code, tools, games and viz with javascript",
        homePageUrl: "https://admataz.com",
        feedUrl: "https://admataz.com/feed.json",
        description: "admataz is the web portfolio and professional showcase for Adam Davis",
        itemRoot: "https://admataz.com/"
      }
    };

const feeds = [
  // {
  //   srcDir: "./src/content/code",
  //   baseUrl: "/code",
  //   dest: "./docs/code"
  // },
  // {
  //   srcDir: "./src/content/tools",
  //   baseUrl: "/tools",
  //   dest: "./docs/tools"
  // },
  // {
  //   srcDir: "./src/content/games",
  //   baseUrl: "/games",
  //   dest: "./docs/games"
  // },
  // {
  //   srcDir: "./src/content/viz",
  //   baseUrl: "/viz",
  //   dest: "./docs/viz",
  // },
  // {
  //   srcDir: "./src/content/case-studies",
  //   baseUrl: "/case-studies",
  //   dest: "./docs/case-studies"
  // },
  {
    srcDir: path.resolve(__dirname,"../src/content/notes"),
    baseUrl: "/notes",
    dest: path.resolve(__dirname,"../dist/notes")
  }
];

async function init(src = [], options = {}) {
  const sitefeeds = src.map(async ({ srcDir, dest, baseUrl, feedOptions={} }) => {
    const feedsListSrc = await blockstatic.buildContentList(srcDir, baseUrl, 0);
    const contentList = await blockstatic.buildPages(feedsListSrc, dest, {
      ...options,
      baseUrl
    });
    const compiledContent = await Promise.all(contentList)
    const jsonFeed = blockstatic.jsonFeedTemplate(
      compiledContent,
      options.site
    );
    await jf.writeFile(`${dest}/index.json`, jsonFeed);
    const rssFeed = blockstatic.rssFeedTemplate(
      compiledContent,
      options.site
    );
    await fs.writeFile(`${dest}/index.xml`, rssFeed, 'utf8');
    
    return compiledContent
  })

  const pagesList = await blockstatic.buildContentList(path.resolve(__dirname,'../src/content/pages'), '', 0);
  const sitePages = await blockstatic.buildPages(pagesList, path.resolve(__dirname,"../dist"), {...options, templates: {
    html: path.resolve(__dirname,"../src/templates/html.handlebars"),
    page: path.resolve(__dirname,"../src/templates/section.page.handlebars")
  }})
  const allfeeds = await Promise.all(sitefeeds)
  
  const siteRSSContent = allfeeds
    .flat()
    .sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1))
    .splice(0, 10)

  const rssFeed = blockstatic.rssFeedTemplate(
    siteRSSContent,
    options.site
  );

  const jsonFeed = blockstatic.jsonFeedTemplate(
    siteRSSContent,
    options.site
  );
  await jf.writeFile(path.resolve(__dirname,"../dist/feed.json"), jsonFeed);
  await fs.writeFile(path.resolve(__dirname,"../dist/feed.xml"), rssFeed, 'utf8');

  return Promise.all([
    ...sitefeeds,
    sitePages
  ]);
}

module.exports = init;
if (!module.parent) {
  return init(feeds, defaultOptions)
    .then(() => "compiled!")
    .catch(err => console.log(err));
}
