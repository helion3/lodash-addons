_.mixin({

    /**
     * If _.has returns true, run a validator on value.
     *
     * @param {array|object} obj Collection for _.has
     * @param {string|number} prop Propert/key name.
     * @param {function} validator Function to validate value.
     * @return {boolean} Whether collection has prop, and it passes validation
     */
    hasOfType: function(obj, prop, validator) {
        if (!_.isCollection(obj)) {
            throw new TypeError('"obj" must be a collection.');
        }

        if (!_.isString(prop) && !_.isNumber(prop)) {
            throw new TypeError('"prop" must be a string or number.');
        }

        if (!_.isFunction(validator)) {
            throw new TypeError('"validator" must be a function which returns a boolean.');
        }

        var result = false;

        if (_.has(obj, prop)) {
            result = validator(obj[prop]);
        }

        return result;
    },

    /**
     * Determines if a value is a collection - either an array or an object.
     *
     * @param {mixed} value Value to check
     * @return {boolean} Whether value is an array or object
     */
    isCollection: function(value) {
        return (_.isArray(value) || _.isPlainObject(value));
    },

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
        obj = _.omit(obj, keys);

        // Recursive
        _.each(obj, function(value, key) {
            if (_.isCollection(value)) {
                obj[key] = _.omitDeep(value, keys);
            }
        });

        return obj;
    },

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
        if (!_.isObject(models)) {
            throw new Error('Model must be an object.');
        }
        if (!_.isObject(source)) {
            throw new Error('Source must be an object.');
        }

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
