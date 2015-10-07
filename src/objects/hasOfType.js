module.exports = function(_) {
    _.mixin({

        /**
         * If _.has returns true, run a validator on value.
         *
         * @param {array|object} obj Collection for _.has
         * @param {string|number} prop Propert/key name.
         * @param {function} validator Function to validate value.
         * @return {boolean} Whether collection has prop, and it passes validation
         */
        hasOfType: function(obj, prop, validator) {
            if (!_.isCollection(obj)) {
                throw new TypeError('"obj" must be a collection.');
            }

            if (!_.isString(prop) && !_.isNumber(prop)) {
                throw new TypeError('"prop" must be a string or number.');
            }

            if (!_.isFunction(validator)) {
                throw new TypeError('"validator" must be a function which returns a boolean.');
            }

            var result = false;

            if (_.has(obj, prop)) {
                result = validator(obj[prop]);
            }

            return result;
        }
    });

    return _;
};
