module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Shorthand object creation when sole property is a variable, or a path.
         *
         * @param {string|number} path Property
         * @param {mixed} value Value
         * @return {object} Resulting object
         */
        with: function(path, value) {
            _.checkKey(path);

            var obj = {};
            var paths = path.split('.');
            var l = paths.length;
            var pointer = obj;

            _.each(paths, function(path, index) {
                if (index === l - 1) {
                    pointer[path] = value;
                } else {
                    pointer[path] = {};
                }

                pointer = pointer[path];
            });

            return obj;
        }
    });

    return _;
};
