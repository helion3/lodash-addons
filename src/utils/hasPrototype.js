module.exports = function(_) {
    _ = require('./getPrototype')(_);
    _ = require('./toBool')(_);
    _ = require('../strings/isNonEmptyString')(_);

    _.mixin({

        /**
         * Returns whether or not a prototype exists or a given property exists on the prototype.
         *
         * @param {object} obj Source object
         * @param {string} prop Prototype property.
         * @return {boolean} If prototype exists on the object.
         */
        hasPrototype: function(obj, prop) {
            var result = _.getPrototype(obj);

            if (_.isNonEmptyString(prop)) {
                result = result[prop];
            }

            return _.toBool(result);
        }
    });

    return _;
};
