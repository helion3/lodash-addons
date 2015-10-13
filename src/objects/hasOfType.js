module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

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
            _.checkCollection(obj);
            _.checkKey(prop);
            _.checkFunction(validator);

            var result = false;

            if (_.has(obj, prop)) {
                result = validator(obj[prop]);
            }

            return result;
        }
    });

    return _;
};
