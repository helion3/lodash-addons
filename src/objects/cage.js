module.exports = function(_) {
    _ = require('../utils/cages')(_);

    _.mixin({

        /**
         * Clones source and wraps with _.chain. Destroys original.
         *
         * @param {object|array} source Source chainable.
         * @return {object} Lodash chain.
         */
        cage: function(source) {
            var clone = _.cloneDeep(source);

            if (_.isObject(source)) {
                _.each(source, function(val, key) {
                    delete source[key];
                });
            }

            if (_.isArray(source)) {
                _.remove(source, function() {
                    return true;
                });
            }

            return _.chain(clone);
        }
    });

    return _;
};
