module.exports = function(_) {
    _.mixin({

        /**
         * Execute a function on every element in an array, optionally
         * restriced to those matching a validator.
         *
         * @param {array} arr Array
         * @param {function} func Function to call on each valid element.
         * @param {function} validator Validation method for each element.
         * @return {array} Modified array
         */
        onEach: function(arr, func, validator) {
            if (!_.isArray(arr)) {
                throw new TypeError('"arr" must be an array.');
            }

            if (!_.isFunction(func)) {
                throw new TypeError('"func" must be a function.');
            }

            // Cache validator check
            var hasValidator = _.isFunction(validator);

            // Apply to all matching elements
            _.each(arr, function(value, key) {
                if ((hasValidator && validator(value)) || !hasValidator) {
                    arr[key] = func(value);
                }
            });

            return arr;
        }
    });

    return _;
};
