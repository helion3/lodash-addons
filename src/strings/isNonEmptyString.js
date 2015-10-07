module.exports = function(_) {
    _.mixin({

        /**
         * Returns true if val is a string, and is not empty.
         *
         * @param {object} val A value.
         * @return {boolean} True if a string, and non-empty.
         */
        isNonEmptyString: function(val) {
            return _.isString(val) && val.trim() !== '';
        }
    });

    return _;
};
