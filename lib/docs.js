#!/usr/bin/env node

var docdown = require('docdown');
var fs = require('fs');
var path = require('path');
var srcPath = path.join(__dirname, '../src/lodash-addons.js');
var headerPath = path.join(__dirname, 'readme-header.md');
var outPath = path.join(__dirname, '..');

var markdown = docdown({
    title: '',
    toc: 'categories',
    path: srcPath,
    url: 'https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js'
});

// Create output directory
if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath);
}

fs.readFile(headerPath, 'utf8', function(err, header) {
    if (err) {
        console.log('Error writing to file:');
        console.log(err);
        return;
    }

    // Write file
    fs.writeFile(path.join(outPath, 'README.md'), (header + '\n' + markdown), function(err) {
        if (err) {
            console.log('Error writing to file:');
            console.log(err);
            return;
        }

        console.log('Wrote output.');
    });
});
