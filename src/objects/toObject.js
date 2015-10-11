module.exports = function(_) {
    _ = require('./recurse')(_);
    _ = require('../validators')(_);

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
                if (_.isFunction(item.toObject)) {
                    item = item.toObject();
                }

                return item;
            });
        }
    });

    return _;
};
