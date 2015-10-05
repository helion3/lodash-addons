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
        if (!_.isNumber(value)) {
            throw new TypeError('Value must be a number.');
        }

        // Treat second argument as a max if no min defined
        var max = (_.isNumber(b) ? b : a);
        var min;
        if (_.isNumber(b)) {
            min = a;
        }

        if (!_.isNumber(max)) {
            throw new TypeError('Maximum boundary value must be a number.');
        }

        if (min && !_.isNumber(min)) {
            throw new TypeError('Minimum boundary value must be a number.');
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
