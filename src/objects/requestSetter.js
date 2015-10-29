module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Gives a setter for `prop` only to the first requesting caller.
         *
         * Creates request[Prop]Setter and get[Prop] methods
         * on the source object. The first caller to request[Prop]Setter
         * gets it and therefore is the only one allowed to invoke it.
         *
         * Any caller may use the getter.
         *
         * @param {object} obj Target object.
         * @param {string} prop Property name.
         * @return {obj} Modified object.
         */
        requestSetter: function(obj, prop) {
            _.checkObject(obj);
            _.checkString(prop);

            var capped = _.capitalize(prop);

            return (function() {
                var setter;
                var value = obj[prop];
                delete obj[prop];

                obj['request' + capped + 'Setter'] = function() {
                    if (setter) {
                        throw new Error('Setter has already been given.');
                    }

                    setter = function(newValue) {
                        value = newValue;
                    };

                    return setter;
                };

                obj['get' + capped] = function() {
                    return value;
                };

                return obj;
            }());
        }
    });

    return _;
};
