var fs = require('fs');
var path = require('path');
var testPath = path.join(__dirname, 'colors');

describe('Colors', function() {
    fs.readdirSync(testPath).forEach(function(file) {
        if (file.indexOf('.js') >= 0 && __filename.indexOf(file) === -1) {
            require(path.join(testPath, file))();
        }
    });
});
