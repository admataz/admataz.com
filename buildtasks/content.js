#!/usr/bin/env node

const fs = require("fs").promises;
const jf = require("jsonfile");
const blockstatic = require("blockstatic");

const defaultOptions = {
  docs: {
    "main-nav": "./src/content/docs/main-nav.md",
    "admataz-logo": "./src/content/docs/admataz-logo.md"
  },
  // data: {
  //   common: "./src/content/data/global-content.json"
  // },
  templates: {
    html: "./src/templates/html.handlebars",
    page: "./src/templates/page.handlebars"
  },
  site: {
    title: "admataz - code, tools, games and viz with javascript",
    homePageUrl: "http://admataz.com",
    feedUrl: "http://admataz.com/feed.json",
    description: "admataz is the web portfolio and professional showcase for Adam Davis",
    itemRoot: "http://admataz.com/"
  }
};

const feeds = [
  {
    srcDir: "./src/content/code",
    baseUrl: "/code",
    dest: "./dist/code"
  },
  {
    srcDir: "./src/content/tools",
    baseUrl: "/tools",
    dest: "./dist/tools"
  },
  {
    srcDir: "./src/content/games",
    baseUrl: "/games",
    dest: "./dist/games"
  },
  {
    srcDir: "./src/content/viz",
    baseUrl: "/viz",
    dest: "./dist/viz"
  },
  {
    srcDir: "./src/content/case-studies",
    baseUrl: "/case-studies",
    dest: "./dist/case-studies"
  },
  {
    srcDir: "./src/content/notes",
    baseUrl: "/notes",
    dest: "./dist/notes"
  }
];

async function init(src = [], options = {}) {
  const sitefeeds = src.map(async ({ srcDir, dest, baseUrl }) => {
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

  const pagesList = await blockstatic.buildContentList('./src/content/pages', '', 0);
  const sitePages = blockstatic.buildPages(pagesList, "./dist", options)
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
  await jf.writeFile(`./dist/feed.json`, jsonFeed);
  await fs.writeFile(`./dist/feed.xml`, rssFeed, 'utf8');

  return Promise.all([
    ...sitefeeds,
    sitePages
  ]);
}

module.exports = init;
if (!module.parent) {
  init(feeds, defaultOptions)
    .then(() => "compiled!")
    .catch(err => console.log(err));
}
