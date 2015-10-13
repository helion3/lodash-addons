module.exports = function(_) {
    _.mixin({

        /**
         * Converts a value to a boolean to work properly within explicit comparisons.
         *
         * @param {mixed} value Source value
         * @return {boolean} Resulting boolean
         */
        toBool: function(value) {
            return Boolean(value);
        }
    });

    return _;
};
