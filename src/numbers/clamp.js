module.exports = function(_) {
    _ = require('../validators')(_);

    _.mixin({

        /**
         * Clamps a number to a given maximum, or minimum/maximum range.
         *
         * @param {int} value Numeric value
         * @param {int} a Maximum value. Minimum value if "b" defined.
         * @param {int} b Maximum value, if "a" defined.
         * @return {int} Resulting number.
         */
        clamp: function(value, a, b) {
            _.checkNumber(value);
            _.checkNumber(a);

            // Treat second argument as a max if no min defined
            var max = (_.isNumber(b) ? b : a);
            var min;
            if (_.isNumber(b)) {
                min = a;
            }

            if (value > max) {
                value = max;
            }

            if (_.isNumber(min) && value < min) {
                value = min;
            }

            return value;
        }
    });

    return _;
};
