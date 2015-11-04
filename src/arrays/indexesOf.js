module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Returns an array of indexes where elements pass the validator.
         *
         * @param {array} arr Target array
         * @param {function} validator Validation method.
         * @return {array} Array of indexes where element matched.
         */
        indexesOf: function(arr, validator) {
            _.checkArray(arr);
            _.checkFunction(validator);

            var keys = [];

            _.each(arr, function(value, key) {
                if (validator(value, key)) {
                    keys.push(key);
                }
            });

            return keys;
        }
    });

    return _;
};
