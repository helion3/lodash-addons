module.exports = function(_) {
    _ = require('./isCollection')(_);
    _ = require('../validators')(_);

    _.mixin({

        /**
         * Creates a new object with constants taken from an
         * object or nested object's properties.
         * (via _.constant)
         *
         * @param {object} obj Source object
         * @return {object} Resulting object
         */
        finalize: function(obj) {
            _.checkObject(obj);

            var replacement = {};

            _.each(obj, function(value, key) {
                // Finalize nested object
                if (_.isPlainObject(value)) {
                    value = _.finalize(value);
                } else if (_.isArray(value)) {
                    // Finalize objects within array
                    _.each(value, function(element, index) {
                        if (_.isPlainObject(element)) {
                            value[index] = _.finalize(element);
                        }
                    });
                }

                _.constant(replacement, key, value);
            });

            return replacement;
        }
    });

    return _;
};
