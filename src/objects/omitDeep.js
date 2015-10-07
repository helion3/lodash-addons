module.exports = function(_) {
    // Inject internal deps
    _ = require('./isCollection')(_);
    _ = require('./onEach')(_);

    _.mixin({

        /**
         * Run _.omit recursively down a collection.
         *
         * @param {array|object} obj Collection
         * @param {array} keys Array of property/key names to omit
         * @return {array|object} Modified collection.
         */
        omitDeep: function(obj, keys) {
            if (!_.isCollection(obj)) {
                throw new TypeError('"obj" must be a collection.');
            }

            if (!_.isCollection(keys)) {
                throw new TypeError('"keys" must be an array.');
            }

            // Root level
            if (_.isPlainObject(obj)) {
                obj = _.omit(obj, keys);
            }

            // Recursive
            _.each(obj, function(value, key) {
                if (_.isArray(value)) {
                    _.onEach(value, _.partialRight(_.omit, keys), _.isPlainObject);
                } else if (_.isPlainObject(value)) {
                    obj[key] = _.omitDeep(value, keys);
                }
            });

            return obj;
        }
    });

    return _;
};
