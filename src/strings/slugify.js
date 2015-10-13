module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Returns a url-safe "slug" form of a string.
         *
         * @param {string} str String value.
         * @return {string} URL-safe form of a string.
         */
        slugify: function(str) {
            _.checkString(str);

            return str.trim().toLowerCase().replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, '');
        }
    });

    return _;
};
