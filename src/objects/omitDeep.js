module.exports = function(_) {
    // Inject internal deps
    _ = require('./isCollection')(_);
    _ = require('./mapFiltered')(_);
    _ = require('../validators')(_);

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

            // Root level
            if (_.isPlainObject(obj)) {
                obj = _.omit(obj, keys);
            }

            // Recursive
            _.each(obj, function(value, key) {
                if (_.isArray(value) || _.isPlainObject(value)) {
                    obj[key] = _.omitDeep(value, keys);
                }
            });

            return obj;
        }
    });

    return _;
};
