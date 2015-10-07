module.exports = function(_) {
    _.mixin({

        /**
         * Converts the first letter in a string to lower-case.
         *
         * @param {string} str String
         * @return {string} Resulting string.
         */
        lowerFirstLetter: function(str) {
            if (!_.isNonEmptyString(str)) {
                throw new TypeError('"str" must be a non-empty string.');
            }

            return str.charAt(0).toLowerCase() + str.slice(1);
        }
    });

    return _;
};
