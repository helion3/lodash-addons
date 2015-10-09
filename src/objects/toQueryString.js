module.exports = function(_) {
    _ = require('../validators')(_);

    _.mixin({

        /**
         * Converts an object's key/values to a query string.
         *
         * @param {object} obj Source key/value collection
         * @return {string} Query string
         */
        toQueryString: function(obj) {
            _.checkPlainObject(obj);

            var segments = [];

            _.each(obj, function(value, key) {
                segments.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
            });

            return segments.join('&');
        }
    });

    return _;
};
