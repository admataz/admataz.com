---
author: Adam Davis
date: 2019-12-20
description: I've made a few changes to this most recent version of admataz.com
keywords: site updates, code, redesign
title: admataz.com updates
published: true
assets: 
  js: 
    - "./src/content/js/admataz-logo-svg.js"
---

In my spare time for the last couple months I've been making some updates to [admataz.com](https://admataz.com). 

### Content and structure updates
The initial change that was needed was **content and structure** - the site was out of date with where I am now professionaly. I have moved focus from being a self employed consultant, with _admataz the business_ to a full-time remote developer working for [NearForm](https://nearform.com). Many of the client websites I worked on and that were part of my portfolio, case studies and showcase were getting out of date, or not relevant. The focus of my work life has changed, and _admataz the website_ now lives on as my personal space to experiment, express and share. 


### Technical updates
- I rewrote [Blockstatic](https://npmjs.org/packages/blockstatic) and released version `2.0` that is used to build this site's HTML.  Blockstatic is a node.js  static site generator I wrote to convert my source Markdown content files into the HTML for the site you are looking at right now. I modernised the JavaScript in Blockstatic, and added some new features. Hopefully this makes it even easier for me to add new content, and share some code and ideas
- I reassembled the scrolly background boxes as a [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components), authored with [Svelte.js](https://svelte.dev). A long time ago in their first iteration, they were written with Ractive.js, and then updated as a React.js component - and now Svelte - kindof full circle. Same behaviour,  different libraries. 
- I've cleaned up the site's javascript and removed any dependency on jQuery - and generally reduced the download sizes for pages. 
- With the changes in Blockstatic, I'm able to embed images, scripts and styles for specific pages. This allows me to easily create showcase example pages containing modular javascript with specific style requirements, without polluting the global style or script objects - and that are downloaded on that page only. 


### Design updates
Design is an ongoing exercise in shifting pixels. It's never complete. Things look a pretty much the same as they did in the previous site - I've changed typefaces, and made things a bit better in mobile view. 

<div id="svg-logo"></div>

If you want to compare - I've kept the old site in the archive. You can see it [here](https://archive2016.demo.admataz.com). 


