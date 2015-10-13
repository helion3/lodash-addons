module.exports = function(_) {
    _.mixin({

        /**
         * Throw a TypeError if value isn't an array.
         *
         * @param {mixed} arr Value
         * @return {void}
         */
        checkArray: function(arr) {
            if (!_.isArray(arr)) {
                throw new TypeError('Argument must be an array.');
            }
        },

        /**
         * Throw a TypeError if value isn't a boolean.
         *
         * @param {mixed} bool Value
         * @return {void}
         */
        checkBoolean: function(bool) {
            if (!_.isBoolean(bool)) {
                throw new TypeError('Argument must be a boolean.');
            }
        },

        /**
         * Throw a TypeError if value isn't an array or object.
         *
         * @param {mixed} col Value
         * @return {void}
         */
        checkCollection: function(col) {
            if (!_.isArray(col) && !_.isPlainObject(col)) {
                throw new TypeError('Argument must be an array or object.');
            }
        },

        /**
         * Throw a TypeError if value isn't a function.
         *
         * @param {mixed} func Value
         * @return {void}
         */
        checkFunction: function(func) {
            if (!_.isFunction(func)) {
                throw new TypeError('Argument must be a function.');
            }
        },

        /**
         * Throw a TypeError if value isn't a number/string.
         *
         * @param {mixed} val Value
         * @return {void}
         */
        checkKey: function(val) {
            if (!_.isString(val) && !_.isNumber(val)) {
                throw new TypeError('Argument must be a string or number.');
            }
        },

        /**
         * Throw a TypeError if value isn't a number.
         *
         * @param {mixed} num Value
         * @return {void}
         */
        checkNumber: function(num) {
            if (!_.isNumber(num)) {
                throw new TypeError('Argument must be a number.');
            }
        },

        /**
         * Throw a TypeError if value isn't an object.
         *
         * @param {mixed} obj Value
         * @return {void}
         */
        checkObject: function(obj) {
            if (!_.isObject(obj)) {
                throw new TypeError('Argument must be an object.');
            }
        },

        /**
         * Throw a TypeError if value isn't a plain object.
         *
         * @param {mixed} obj Value
         * @return {void}
         */
        checkPlainObject: function(obj) {
            if (!_.isPlainObject(obj)) {
                throw new TypeError('Argument must be a plain object.');
            }
        },

        /**
         * Throw a TypeError if value isn't a string.
         *
         * @param {mixed} str Value
         * @return {void}
         */
        checkString: function(str) {
            if (!_.isString(str)) {
                throw new TypeError('Argument must be a string.');
            }
        }
    });

    return _;
};
