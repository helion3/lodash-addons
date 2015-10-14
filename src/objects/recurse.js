module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Invoke a function recursively on every element in a collection.
         *
         * @param {object|array} col Collection
         * @param {function} func Function to invoke
         * @return {object|array} Modified collection
         */
        recurse: function(col, func) {
            _.checkObject(col);
            _.checkFunction(func);

            col = func(col);

            _.each(col, function(item, key) {
                if (_.isObject(item)) {
                    col[key] = _.recurse(item, func);
                } else {
                    col[key] = func(item);
                }
            });

            return col;
        }
    });

    return _;
};
