module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Converts the first letter in a string to lower-case.
         *
         * @param {string} str String
         * @return {string} Resulting string.
         */
        lowerFirstLetter: function(str) {
            _.checkString(str);

            return str.charAt(0).toLowerCase() + str.slice(1);
        }
    });

    return _;
};
