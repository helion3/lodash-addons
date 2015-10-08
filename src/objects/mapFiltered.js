module.exports = function(_) {
    _ = require('../validators')(_);

    _.mixin({

        /**
         * Map a function to filtered array elements.
         *
         * @param {array} arr Array
         * @param {function} validator Validation method for each element.
         * @param {function} func Function to call on each valid element.
         * @return {array} Modified array
         */
        mapFiltered: function(arr, validator, func) {
            _.checkArray(arr);
            _.checkFunction(func);
            _.checkFunction(validator);

            return _.map(_.filter(arr, validator), func);
        }
    });

    return _;
};
