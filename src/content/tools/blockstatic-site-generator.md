---
title: Blockstatic site generator
author: "Adam Davis"
date: "2019-10-07"
description: Build static html websites from markdown using this desktop command line package
keywords: "code, adam davis, web"
published: true
assets: 
    img: 
        - "./src/content/tools/images/blockstatic2.png"

---


- [npm module](https://www.npmjs.com/package/blockstatic)
- [source code](https://github.com/admataz/blockstatic)

![Blockstatic](/tools/blockstatic-site-generator/img/blockstatic2.png)



*Blockstatic* is a collection of utilities that can be used to generate static HTML content pages from Markdown and JSON data files and using Handlebars.js templates. This module can be used alongside other build tasks that look after assets, scripts or styles.

## Installation
`npm install --save-dev blockstatic`

## Usage

Blockstatic can be used as with a simple command line interface - or as a library in your custom build scripts. 

The most important interfaces are the `buildContentList()` and `buildPages()` which between them allow you to define a directory containing content pages, and with some config options to build HTML output. 

e.g.

``` javascript
blockstatic.buildContentList('./src/content/pagedata', 'https://admataz.com/')
.then(contentPages => blockstatic.buildPages(contentPages, './dist', options));
```

This will scan the contents of the source path for Markdown and JSON files, and convert each into an HTML page, according to the options passed to it, or defined in the loaded JSON.
