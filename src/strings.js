_.mixin({

    /**
     * Returns true if val is a string, and is not empty.
     *
     * @param {object} val A value.
     * @return {boolean} True if a string, and non-empty.
     */
    isNonEmptyString: function(val) {
        return _.isString(val) && val.trim() !== '';
    },

    /**
     * Generates a random alphanumeric key.
     *
     * @param {int} length Desired length.
     * @return {string} Key
     */
    generateKey: function(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0, l = (length || 16); i < l; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    },

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
    },

    /**
     * Returns a url-safe "slug" form of a string.
     *
     * @param {string} str String value.
     * @return {string} URL-safe form of a string.
     */
    slugify: function(str) {
        if (!_.isString(str)) {
            throw new TypeError('"str" must be a non-empty string.');
        }

        return str.trim().toLowerCase().replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, '');
    }
});
