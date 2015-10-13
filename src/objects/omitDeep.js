module.exports = function(_) {
    // Inject internal deps
    _ = require('./recurse')(_);
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Run _.omit recursively down a collection.
         *
         * @param {array|object} obj Collection
         * @param {array} keys Array of property/key names to omit
         * @return {array|object} Modified collection.
         */
        omitDeep: function(obj, keys) {
            _.checkCollection(obj);
            _.checkArray(keys);

            return _.recurse(obj, function(item) {
                if (_.isPlainObject(item)) {
                    item = _.omit(item, keys);
                }

                return item;
            });
        }
    });

    return _;
};
