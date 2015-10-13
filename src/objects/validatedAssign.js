module.exports = function(_) {
    _ = require('../utils/preconditions')(_);

    _.mixin({

        /**
         * Validates a source object's properties against a defined model.
         * If the validation passes, the property is accepted, otherwise
         * a default value will be used.
         *
         * @param {Object} models Description object of accepted properties
         * @param {Object} source Object to filter through validators
         * @param {Boolean} strict Only properties defined in the model allowed through
         * @return {Object} A new object
         */
        validatedAssign: function(models, source, strict) {
            _.checkPlainObject(models);
            _.checkPlainObject(source);

            strict = _.isBoolean(strict) ? strict : true;

            var result = {};
            _.each(models, function(model, key) {
                // Determine final value
                var takenValue = _.has(model, 'default') ? model.default : model;
                if (_.has(source, key)) {
                    // Use the given validator
                    if (_.has(model, 'validator')) {
                        // Ensure callable
                        if (!_.isFunction(model.validator)) {
                            throw new Error('Invalid validator function for ' + key + '.');
                        }

                        // Validate
                        if (model.validator(source[key])) {
                            takenValue = source[key];
                        }
                    } else if (_.isPlainObject(model)) {
                        // compare their types
                        takenValue = _.validatedAssign(model, source[key]);
                    } else if (typeof model === typeof source[key]) {
                        // Allow if they're the same type
                        takenValue = source[key];
                    }
                }
                result[key] = takenValue;
            });

            if (strict !== true) {
                _.each(source, function(value, key) {
                    if (!_.has(result, key)) {
                        result[key] = value;
                    }
                });
            }

            return result;
        }
    });

    return _;
};
