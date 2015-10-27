module.exports = function(_) {
    _ = require('./hasOfType')(_);
    _ = require('./recurse')(_);
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Recursively invokes "toObject" on objects which support the method.
         *
         * Many complex objects from libraries like Collections.js, Mongoose,
         * support to a toObject method for converting to plain objects.
         *
         * @param {object} obj Original object.
         * @return {object} Plain object.
         */
        toObject: function(obj) {
            return _.recurse(obj, function(item) {
                if (_.hasOfType(item, 'toObject', _.isFunction)) {
                    item = item.toObject();
                }

                return item;
            });
        }
    });

    return _;
};
