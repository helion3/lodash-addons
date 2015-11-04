module.exports = function(_) {
    _ = require('../utils/preconditions')(_);
    _ = require('./indexesOf')(_);

    _.mixin({

        /**
         * Iterate elements in an array skipping any at given keys.
         *
         * @param {array} arr Source array
         * @param {array} keys Keys array
         * @param {function} func Function called on allowed elements.
         * @return {array} Source array.
         */
        exceptKeys: function(arr, keys, func) {
            _.checkArray(arr);
            _.checkArray(keys);
            _.checkFunction(func);

            _.each(arr, function(value, key) {
                if (!_.includes(keys, key)) {
                    func(value, key);
                }
            });
        }
    });

    return _;
};
