;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['lodash'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('lodash'));
  } else {
    root._ = factory(root._);
  }
}(this, function(_) {
_.mixin({

    /**
     * Lightens an RGB color.
     *
     * @param {object} color Object with "r", "g", "b" properties.
     * @param {int} lightenBy Value to lighten a color by.
     * @return {object} Color with RGB values
     */
    lighten: function(color, lightenBy) {
        lightenBy = lightenBy || 200;
        var newRed = color.r + lightenBy;
        var newGreen = color.g + lightenBy;
        var newBlue = color.b + lightenBy;

        return {
            r: _.clamp(newRed, 255),
            g: _.clamp(newGreen, 255),
            b: _.clamp(newBlue, 255)
        };
    },

    /**
     * Generates a color via random RGB values.
     *
     * @return {object} Object with RGB values
     */
    randomColor: function() {
        return {
            r: _.random(0, 255),
            g: _.random(0, 255),
            b: _.random(0, 255)
        };
    }
});

_.mixin({

    /**
     * Clamps a number to a given maximum, or minimum/maximum range.
     *
     * @param {int} value Numeric value
     * @param {int} a Maximum value. Minimum value if "b" defined.
     * @param {int} b Maximum value, if "a" defined.
     * @return {int} Resulting number.
     */
    clamp: function(value, a, b) {
        if (!_.isNumber(value)) {
            throw new TypeError('Value must be a number.');
        }

        // Treat second argument as a max if no min defined
        var max = (_.isNumber(b) ? b : a);
        var min;
        if (_.isNumber(b)) {
            min = a;
        }

        if (!_.isNumber(max)) {
            throw new TypeError('Maximum boundary value must be a number.');
        }

        if (min && !_.isNumber(min)) {
            throw new TypeError('Minimum boundary value must be a number.');
        }

        if (value > max) {
            value = max;
        }

        if (_.isNumber(min) && value < min) {
            value = min;
        }

        return value;
    }
});

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

_.mixin({

    /**
     * Returns true if val is a string, and is not empty.
     *
     * @param {object} val A value.
     * @return {boolean} True if a string, and non-empty.
     */
    isNonEmptyString: function(val) {
        return _.isString(val) && val.trim() !== '';
    },

    /**
     * Generates a random alphanumeric key.
     *
     * @param {int} length Desired length.
     * @return {string} Key
     */
    generateKey: function(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0, l = (length || 16); i < l; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    },

    /**
     * Converts the first letter in a string to lower-case.
     *
     * @param {string} str String
     * @return {string} Resulting string.
     */
    lowerFirstLetter: function(str) {
        if (!_.isNonEmptyString(str)) {
            throw new TypeError('"str" must be a non-empty string.');
        }

        return str.charAt(0).toLowerCase() + str.slice(1);
    },

    /**
     * Returns a url-safe "slug" form of a string.
     *
     * @param {string} str String value.
     * @return {string} URL-safe form of a string.
     */
    slugify: function(str) {
        if (!_.isString(str)) {
            throw new TypeError('"str" must be a non-empty string.');
        }

        return str.trim().toLowerCase().replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, '');
    }
});

return _;
}));
