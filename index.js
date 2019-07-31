
var async = require('async');
var content = require('./buildtasks/content');
var scripts = require('./buildtasks/scripts');
var styles = require('./buildtasks/styles');
var assets = require('./buildtasks/assets');


 async.series([
    content,
    scripts,
    styles,
    assets
],(err) => {
    if (err) {
      console.log(err)
    }
    console.log('Compiled Site!');

});

