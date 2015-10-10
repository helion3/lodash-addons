module.exports = function(_) {
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
            if (_.isFunction(obj.toObject)) {
                obj = obj.toObject();
            }

            _.each(obj, function(value, key) {
                if (_.isObject(value) || _.isArray(value)) {
                    obj[key] = _.toObject(value);
                }
            });

            return obj;
        }
    });

    return _;
};
