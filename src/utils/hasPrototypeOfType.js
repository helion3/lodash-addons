module.exports = function(_) {
    _ = require('./getPrototype')(_);
    _ = require('./hasPrototype')(_);
    _ = require('./preconditions')(_);

    _.mixin({

        /**
         * Returns whether an object has a prototype property of the given type.
         *
         * @param {object} obj Source object
         * @param {string} prop Prototype property.
         * @param {function} validator Validation function.
         * @return {boolean} If prototype property exists and is the correct type.
         */
        hasPrototypeOfType: function(obj, prop, validator) {
            _.checkKey(prop);
            _.checkFunction(validator);

            var proto = _.getPrototype(obj);
            var result = false;

            if (proto) {
                result = validator(proto[prop]);
            }

            return result;
        }
    });

    return _;
};
