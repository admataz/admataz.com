# Pages

This is the best place to define the site structure 

each page can be defined as a json object: 

```js 
{
    author: "Adam Davis",
    date: "2019-10-07",
    description: "What's this all about",
    keywords: "comma, separated, keywords",
    title: "Document title",
    published: true,
    routePath: "url/path",
    docs: { docID: "path/to/file.md" }
    data: { dataID: "path/to/file.json" }
    elements: { elementID: { template: "path/to/element_template.handlebars", data: "path/to/data.json"}}
    templates: { page: "path/to/template.handlebars", html: "path/to/template.handlebars" }
    customBuild: "path/to/node/module",
    indexPages: { indexId: {inputPath: "path/to/pages", template: "path/to/template.handlebars", outputPath: "optional/path/to/output/defaults/to/container/page"}}
    js: ["path/to/script.js"],
    css: ["path/to/style.css"],
    assets: ["path/to/assets"]
  }
 ```


 ...as an .md with yaml metadata as front matter: 

 ```yaml
    author: "Adam Davis"
    date: "2019-10-07"
    description: "What's this all about"
    keywords: "comma, separated, keywords"
    title: "Document title"
    published: true
    routePath: "url/path"
    docs: 
        docID: "path/to/file.md" 
    data: 
        dataID: "path/to/file.json" 
    elements:  
        elementID: 
            template: "path/to/element_template.handlebars"
            data: "path/to/data.json"
    templates: 
        page: "path/to/template.handlebars"
        html: "path/to/template.handlebars"
    customBuild: "path/to/node/module"
    indexPages: 
        indexId: 
            inputPath: "path/to/pages"
            template: "path/to/template.handlebars"
            outputPath: "optional/path/to/output/defaults/to/container/page"
    js: 
        - "path/to/script.js"
    css: 
        - "path/to/style.css"
    assets: 
        - "path/to/assets"
        
 ```

 
 