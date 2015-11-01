module.exports = function(_) {
    var getType = function(validator, baseDefault, value, userDefault) {
        var result;

        if (validator(value)) {
            result = value;
        } else if (validator(userDefault)) {
            result = userDefault;
        } else {
            result = baseDefault;
        }

        return result;
    };

    _.mixin({

        /**
         * Returns value if a array, otherwise a default array.
         *
         * @param {mixed} value Source value
         * @param {number} userDefault Customd default if value is invalid type.
         * @return {number} Final array.
         */
        getArray: function(value, userDefault) {
            return getType(_.isArray, [], value, userDefault);
        },

        /**
         * Returns value if a boolean, otherwise a default boolean.
         *
         * @param {mixed} value Source value
         * @param {number} userDefault Customd default if value is invalid type.
         * @return {number} Final boolean.
         */
        getBoolean: function(value, userDefault) {
            return getType(_.isBoolean, false, value, userDefault);
        },

        /**
         * Returns value if a number, otherwise a default number.
         *
         * @param {mixed} value Source value
         * @param {number} userDefault Customd default if value is invalid type.
         * @return {number} Final number.
         */
        getNumber: function(value, userDefault) {
            return getType(_.isNumber, 0, value, userDefault);
        },

        /**
         * Returns value if a string, otherwise a default string.
         *
         * @param {mixed} value Source value
         * @param {number} userDefault Customd default if value is invalid type.
         * @return {number} Final string.
         */
        getString: function(value, userDefault) {
            return getType(_.isString, '', value, userDefault);
        }
    });

    return _;
};
