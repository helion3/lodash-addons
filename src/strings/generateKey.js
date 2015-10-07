module.exports = function(_) {
    _.mixin({

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
        }
    });

    return _;
};
