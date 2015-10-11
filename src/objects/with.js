module.exports = function(_) {
    _ = require('../validators')(_);

    _.mixin({

        /**
         * Shorthand object creation when sole property is a variable.
         *
         * @param {string|number} key Property
         * @param {mixed} value Value
         * @return {object} Resulting object
         */
        with: function(key, value) {
            _.checkKey(key);

            var obj = {};
            obj[key] = value;

            return obj;
        }
    });

    return _;
};
