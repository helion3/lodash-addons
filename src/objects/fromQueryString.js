module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Parses query string into key/value object.
         *
         * @param {string} queryStr Query string.
         * @return {pbject} Key/value map.
         */
        fromQueryString: function(queryStr) {
            _.checkString(queryStr);

            var obj = {};
            var segments = queryStr.split('&');

            _.each(segments, function(segment) {
                var split = segment.split('=');
                obj[split[0]] = decodeURIComponent(split[1]);
            });

            return obj;
        }
    });

    return _;
};
