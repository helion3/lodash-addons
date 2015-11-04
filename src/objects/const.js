module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Creates an immutable property on an object.
         *
         * @param {object} obj Target object
         * @param {string} name Property name.
         * @param {mixed} value Property value.
         * @return {object} Target object with immutable property.
         */
        const: function(obj, name, value) {
            _.checkObject(obj);
            _.checkString(name);

            Object.defineProperty(obj, name, {
                value: value,
                enumerable: true,
                configurable: false,
                writable: false
            });

            return obj;
        }
    });

    return _;
};