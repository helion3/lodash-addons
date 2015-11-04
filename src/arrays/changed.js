module.exports = function(_) {
    _ = require('../utils/preconditions')(_);
    _ = require('./indexesOf')(_);

    _.mixin({

        /**
         * Returns indexes for elements which do not match between two arrays.
         *
         * @param {array} arr1 Source array
         * @param {array} arr2 Target array
         * @return {array} Array of indexes for changed elements.
         */
        changed: function(arr1, arr2) {
            _.checkArray(arr1);
            _.checkArray(arr2);

            return _.indexesOf(arr1, function(val, key) {
                return val !== arr2[key];
            });
        }
    });

    return _;
};
