module.exports = function(_) {
    _ = require('../utils/hasPrototype')(_);
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Merge prototype properties from source to target.
         *
         * @param {object|function} target Target object.
         * @param {object|function} source Object/function to mixin.
         * @return {array} Modified array
         */
        mixInto: function(target, source) {
            _.check(target, _.hasPrototype);
            _.check(source, _.hasPrototype);

            if (!_.isPlainObject(target)) {
                target = _.getPrototype(target);
            }

            return _.assign(target, _.getPrototype(source));
        }
    });

    return _;
};
