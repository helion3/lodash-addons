var fs = require('fs');
var path = require('path');
var _ = require(path.join(__dirname, '../src/lodash-addons'));

fs.readdirSync(__dirname).forEach(function(file) {
    var subpath = path.join(__dirname, file);
    if (fs.lstatSync(subpath).isDirectory()) {
        describe(_.capitalize(file), function() {
            _.each(fs.readdirSync(subpath), function(file) {
                if (file.indexOf('.js') >= 0) {
                    require(path.join(subpath, file))(_);
                }
            });
        });
    }
});
