module.exports = function(_) {
    _.mixin({

        /**
         * Returns the prototype for the given object.
         *
         * @param {object} obj Source object
         * @return {object} Found prototype or null.
         */
        getPrototype: function(obj) {
            var prototype;

            if (!_.isUndefined(obj) && !_.isNull(obj)) {
                if (!_.isObject(obj)) {
                    prototype = obj.constructor.prototype;
                } else if (_.isFunction(obj)) {
                    prototype = obj.prototype;
                } else {
                    prototype = Object.getPrototypeOf(obj);
                }
            }

            return prototype;
        }
    });

    return _;
};
