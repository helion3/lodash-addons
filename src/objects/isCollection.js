module.exports = function(_) {
    _.mixin({

        /**
         * Determines if a value is a collection - either an array or an object.
         *
         * @param {mixed} value Value to check
         * @return {boolean} Whether value is an array or object
         */
        isCollection: function(value) {
            return (_.isArray(value) || _.isPlainObject(value));
        }
    });

    return _;
};
