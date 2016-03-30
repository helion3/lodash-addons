/**
 * @license
 * lodash-addons
 * Copyright 2015 Helion3 <http://helion3.com>
 * Available under MIT license
 */
;(function(root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['lodash'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('lodash'));
    } else {
        root._ = factory(root._);
    }
}(this, function(_) {
    'use strict';

    /**
     * Base function for returning a default when the given value fails validation.
     *
     * @private
     * @param {function} validator Validation function.
     * @param {*} baseDefault Base default value.
     * @param {*} value Given value.
     * @param {*} replacement Custom replacement.
     * @return {*} Final value.
     */
    function baseGetType(validator, baseDefault, value, replacement) {
        var result;

        if (validator(value)) {
            result = value;
        } else if (validator(replacement)) {
            result = replacement;
        } else {
            result = baseDefault;
        }

        return result;
    }

    /**
     * Gets indices for which elements differ between two arrays.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {array} first First array
     * @param {array} second Second array
     * @return {array} Array of indices of differing elements
     * @example
     *
     * _.changes([false, true], [false, false]);
     * // => [1]
     */
    function changes(first, second) {
        if (!_.isArray(first) || !_.isArray(second)) {
            return [];
        }

        return indexesOf(first, function(val, key) {
            return val !== second[key];
        });
    }

    /**
     * Throw a TypeError if value doesn't match one of any provided validation methods.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} value Value
     * @return {void}
     */
    function check(value) {
        var validators = _(arguments).tail().filter(_.isFunction).value();
        if (_.isEmpty(validators)) {
            return;
        }

        var valid = false;

        _.each(validators, function(validator) {
            if (validator(value)) {
                valid = true;

                // Exit each
                return false;
            }
        });

        if (!valid) {
            throw new TypeError('Argument is not any of the accepted types.');
        }
    }

    /**
     * Throw a TypeError if value isn't an array.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} array Value
     * @return {void}
     */
    function checkArray(array) {
        if (!_.isArray(array)) {
            throw new TypeError('Argument must be an array.');
        }
    }

    /**
     * Throw a TypeError if value isn't a boolean.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} boolean Value
     * @return {void}
     */
    function checkBoolean(boolean) {
        if (!_.isBoolean(boolean)) {
            throw new TypeError('Argument must be a boolean.');
        }
    }

    /**
     * Throw a TypeError if value isn't an array or object.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} collection Value
     * @return {void}
     */
    function checkCollection(collection) {
        if (!_.isCollection(collection)) {
            throw new TypeError('Argument must be an array or object.');
        }
    }

    /**
     * Throw a TypeError if value isn't a function.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} func Value
     * @return {void}
     */
    function checkFunction(func) {
        if (!_.isFunction(func)) {
            throw new TypeError('Argument must be a function.');
        }
    }

    /**
     * Throw a TypeError if value isn't a number/string.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} value Value
     * @return {void}
     */
    function checkKey(value) {
        if (!_.isNonEmptyString(value) && !_.isNumber(value)) {
            throw new TypeError('Argument must be a string or number.');
        }
    }

    /**
     * Throw a TypeError if value _.isEmpty
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} value Value
     * @return {void}
     */
    function checkNonEmpty(value) {
        if (_.isEmpty(value)) {
            throw new TypeError('Argument may not be empty.');
        }
    }

    /**
     * Throw a TypeError if value isn't a number.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} number Value
     * @return {void}
     */
    function checkNumber(number) {
        if (!_.isNumber(number)) {
            throw new TypeError('Argument must be a number.');
        }
    }

    /**
     * Throw a TypeError if value isn't an object.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} object Value
     * @return {void}
     */
    function checkObject(object) {
        if (!_.isObject(object)) {
            throw new TypeError('Argument must be an object.');
        }
    }

    /**
     * Throw a TypeError if value isn't a plain object.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} object Value
     * @return {void}
     */
    function checkPlainObject(object) {
        if (!_.isPlainObject(object)) {
            throw new TypeError('Argument must be a plain object.');
        }
    }

    /**
     * Throw a TypeError if value isn't a string.
     *
     * @static
     * @memberOf _
     * @category Preconditions
     * @param {mixed} string Value
     * @return {void}
     */
    function checkString(string) {
        if (!_.isString(string)) {
            throw new TypeError('Argument must be a string.');
        }
    }

    /**
     * Iterate array skipping given indices.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {array} array Source array
     * @param {array} indices Indices to skip
     * @param {function} iteratee Iteratee
     * @return {array} Source array.
     * @example
     *
     * _.exceptKeys(['a', 'b', 'c', 'd'], [1, 3], function(val) {
     *   // skips "b" and "d"
     * });
     */
    function exceptKeys(array, indices, iteratee) {
        array = _.getArray(array);

        if (_.isFunction(iteratee)) {
            indices = _.getArray(indices);
            _.each(array, function(value, i) {
                if (!_.includes(indices, i)) {
                    iteratee(value, i);
                }
            });
        }

        return array;
    }

    /**
     * Parses query string into key/value object.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {string} string Query string.
     * @return {object} Key/value map.
     * @example
     *
     * _.fromQueryString('key=value');
     * // => { key: 'value' }
     */
    function fromQueryString(string) {
        var obj = {};

        _.each(_.getString(string).split('&'), function(segment) {
            var split = segment.split('=');
            obj[split[0]] = decodeURIComponent(split[1]);
        });

        return obj;
    }

    /**
     * Generates a random alphanumeric string with length n.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {int} n Desired length.
     * @return {string} String of random characters.
     * @example
     *
     * _.generateKey(5)
     * // => 'L7IpD'
     */
    function generateKey(n) {
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            l = possible.length - 1;

        var text = '';
        _.times(_.getNumber(n, 16), function() {
            text += possible.charAt(_.random(l));
        });

        return text;
    }

    /**
     * Returns value if an array, otherwise a default.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {mixed} value Source value
     * @param {number} replacement Custom default if value is invalid type.
     * @return {number} Final array.
     * @example
     *
     * _.getArray(null)
     * // => []
     *
     * _.getArray(null, ['test'])
     * // => ['test']
     */
    function getArray(value, replacement) {
        return baseGetType(_.isArray, [], value, replacement);
    }

    /**
     * Returns value if a boolean, otherwise a default boolean.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {mixed} value Source value
     * @param {number} replacement Custom default if value is invalid type.
     * @return {number} Final boolean.
     * @example
     *
     * _.getBoolean(null)
     * // => false
     *
     * _.getBoolean(null, true)
     * // => true
     */
    function getBoolean(value, replacement) {
        return baseGetType(_.isBoolean, false, value, replacement);
    }

    /**
     * Returns value if a function, otherwise a default function.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {mixed} value Source value
     * @param {number} replacement Custom default if value is invalid type.
     * @return {number} Final function.
     * @example
     *
     * _.getFunction(null)
     * // => function () {}
     */
    function getFunction(value, replacement) {
        return baseGetType(_.isFunction, function() {}, value, replacement);
    }

    /**
     * Returns value if a object, otherwise a default object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {mixed} value Source value
     * @param {number} replacement Custom default if value is invalid type.
     * @return {number} Final object.
     * @example
     *
     * _.getObject('')
     * // => {}
     */
    function getObject(value, replacement) {
        return baseGetType(_.isObject, {}, value, replacement);
    }

    /**
     * Returns value if a number, otherwise a default number.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {mixed} value Source value
     * @param {number} replacement Custom default if value is invalid type.
     * @return {number} Final number.
     * @example
     *
     * _.getNumber('')
     * // => 0
     *
     * _.getNumber('', 100)
     * // => 100
     */
    function getNumber(value, replacement) {
        return baseGetType(_.isNumber, 0, value, replacement);
    }

    /**
     * Returns value if a string, otherwise a default string.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {mixed} value Source value
     * @param {number} replacement Custom default if value is invalid type.
     * @return {number} Final string.
     * @example
     *
     * _.getString(false)
     * // => ''
     */
    function getString(value, replacement) {
        return baseGetType(_.isString, '', value, replacement);
    }

    /**
     * Gets the prototype for the given value.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {*} value Source value
     * @return {object} Found prototype or undefined.
     * @example
     *
     * _.getPrototype(5)
     * // => { toFixed: func(), ... }
     */
    function getPrototype(value) {
        var prototype;

        if (!_.isUndefined(value) && !_.isNull(value)) {
            if (!_.isObject(value)) {
                prototype = value.constructor.prototype;
            } else if (_.isFunction(value)) {
                prototype = value.prototype;
            } else {
                prototype = Object.getPrototypeOf(value);
            }
        }

        return prototype;
    }

    /**
     * If _.has returns true, run a validator on value.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {mixed} value Collection for _.has
     * @param {string|number} property Propert/key name.
     * @param {function} validator Function to validate value.
     * @return {boolean} Whether collection has prop, and it passes validation
     * @example
     *
     * _.hasOfType({ test: '' }, 'test', _.isString)
     * // => true
     */
    function hasOfType(value, property, validator) {
        var result = false;

        if (_.has(value, property)) {
            result = validator(_.get(value, property));
        }

        return result;
    }

    /**
     * Checks if a prototype exists, or `property` exists on the prototype.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {*} value Source value
     * @param {string} property Prototype property.
     * @return {boolean} If prototype exists on the object.
     * @example
     *
     * _.hasPrototype(null)
     * // => false
     *
     * _.hasPrototype(5)
     * // => true
     */
    function hasPrototype(value, property) {
        var result = _.getPrototype(value);

        if (result && _.isNonEmptyString(property)) {
            result = result[property];
        }

        return _.toBool(result);
    }

    /**
     * Returns whether an object has a prototype property of the given type.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {*} value Source value.
     * @param {string} property Prototype property.
     * @param {function} predicate Validation function.
     * @return {boolean} If prototype property exists and is the correct type.
     */
    function hasPrototypeOfType(value, property, predicate) {
        var proto = _.getPrototype(value);
        if (proto && _.isFunction(predicate)) {
            return predicate(proto[property]);
        }

        return _.toBool(proto);
    }

    /**
     * Creates an immutable property on an object.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {object} object Target object
     * @param {string} key Property.
     * @param {mixed} value Value.
     * @return {object} Target object with immutable property.
     */
    function immutable(object, key, value) {
        _.checkObject(object);
        _.checkKey(key);

        Object.defineProperty(object, key, {
            value: value,
            enumerable: true,
            configurable: false,
            writable: false
        });

        return object;
    }

    /**
     * Gets indices for elements which predicate returns truthy for.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {array} array Target array
     * @param {function} predicate Predicate value or function.
     * @return {array} Array of indices of matched elements.
     * @example
     *
     * _.indexesOf([3, false, 3], _.isNumber);
     * // => [0, 2]
     *
     * _.indexesOf([3, false, 3], 3);
     * // => [0, 2]
     */
    function indexesOf(array, predicate) {
        var keys = [];

        var func = _.getFunction(predicate, function(value) {
            return value === predicate;
        });

        _.each(array, function(value, key) {
            if (func(value, key)) {
                keys.push(key);
            }
        });

        return keys;
    }

    /**
     * Checks if a value is either an array or an object.
     *
     * @param {mixed} collection Value to check
     * @return {boolean} Whether value is an array or object
     */
    function isCollection(collection) {
        return (_.isArray(collection) || _.isPlainObject(collection));
    }

    /**
     * Checks if value is a non-empty string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {object} string String
     * @return {boolean} True if a non-empty string.
     * @example
     *
     * _.isNonEmptyString('')
     * // => false
     */
    function isNonEmptyString(string) {
        return _.isString(string) && string.trim() !== '';
    }

    /**
     * Map a function to filtered array elements.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {array} array Array
     * @param {function} predicate Validation method for each element.
     * @param {function} iteratee Function to call on each valid element.
     * @return {array} Modified array
     */
    function mapFiltered(array, predicate, iteratee) {
        return _(array).filter(predicate).map(iteratee).value();
    }

    /**
     * Merge prototype properties from source to target.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {object|function} target Target object.
     * @param {object|function} source Object/function to mixin.
     * @return {array} Modified array
     */
    function mixInto(target, source) {
        source = _.getPrototype(source) || {};

        if (!_.isPlainObject(target)) {
            target = _.getPrototype(target);
        }

        return _.assign(target, source);
    }

    /**
     * Shorthand object creation when sole property is a variable, or a path.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {[object]} object Existing object (optional)
     * @param {string|number} path Property
     * @param {mixed} value Value
     * @return {object} Resulting object
     * @example
     *
     * // To create a new object:
     *
     * _.objectWith('key', 'value')
     * // => { key: 'value' }
     *
     * _.objectWith('a.deep.path', 'value')
     * // => {
     *   a: {
     *     deep: {
     *   	 path: 'value'
     *     }
     *   }
     * }
     *
     * // Using existing:
     * _.objectWith({ a: 1 }, 'b', 2)
     * // => { a: 1, b: 2 }
     */
    function objectWith() {
        var obj = {};
        var path;
        var value;

        if (arguments.length === 3) {
            obj = arguments[0];
            path = arguments[1];
            value = arguments[2];
        } else {
            path = arguments[0];
            value = arguments[1];
        }

        var paths = _.getString(path).split('.');
        var l = paths.length;

        var pointer = obj;
        _.each(paths, function(path, index) {
            pointer[path] = (index === l - 1 ? value : {});
            pointer = pointer[path];
        });

        return obj;
    }

    /**
     * Run _.omit recursively down a collection.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {array|object} object Collection
     * @param {array} keys Array of property/key names to omit
     * @return {array|object} Modified collection.
     */
    function omitDeep(object, keys) {
        return _.recurse(object, function(item) {
            if (_.isPlainObject(item)) {
                item = _.omit(item, keys);
            }

            return item;
        });
    }

    /**
     * Invoke a function recursively on every element in a collection.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {object|array} collection Collection
     * @param {function} iteratee Function to invoke
     * @return {object|array} Modified collection
     */
    function recurse(collection, iteratee) {
        collection = iteratee(collection);

        _.each(collection, function(item, key) {
            if (_.isObject(item)) {
                collection[key] = _.recurse(item, iteratee);
            } else {
                collection[key] = iteratee(item);
            }
        });

        return collection;
    }

    /**
     * Gives a setter for `prop` only to the first requesting caller.
     *
     * Creates request[Prop]Setter and get[Prop] methods
     * on the source object. The first caller to request[Prop]Setter
     * gets it and therefore is the only one allowed to invoke it.
     *
     * Any caller may use the getter.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {object} object Target object.
     * @param {string} property Property name.
     * @return {obj} Modified object.
     */
    function requestSetter(object, property) {
        _.checkObject(object);
        _.checkString(property);

        var capped = _.upperFirst(property);

        return (function() {
            var setter;
            var value = object[property];
            delete object[property];

            object['request' + capped + 'Setter'] = function() {
                if (setter) {
                    throw new Error('Setter has already been given.');
                }

                setter = function(newValue) {
                    value = newValue;
                };

                return setter;
            };

            object['relinquish' + capped + 'Setter'] = function() {
                setter = null;
            };

            object['get' + capped] = function() {
                return value;
            };

            return object;
        }());
    }

    /**
     * Generates a url-safe "slug" form of a string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} string String value.
     * @return {string} URL-safe form of a string.
     * @example
     *
     * _.slugify('A Test')
     * // => a-test
     */
    function slugify(string) {
        return _(string).toString().trim().toLowerCase().replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, '');
    }

    /**
     * Converts a value to a boolean.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value Source value
     * @return {boolean} Resulting boolean
     * @example
     *
     * _.toBool(1)
     * // => true
     */
    function toBool(value) {
        return Boolean(value);
    }

    /**
     * Converts an object's key/values to a query string.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {object} object Source key/value collection
     * @return {string} Query string
     * @example
     *
     * _.toQueryString({ a: 1, b: 2 })
     * // => a=1&b=2
     */
    function toQueryString(object) {
        var segments = [];
        _.each(object, function(value, key) {
            segments.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        });

        return segments.join('&');
    }

    /**
     * Recursively invokes "toObject" on objects which support the method.
     *
     * Many complex objects from libraries like Collections.js, Mongoose,
     * support to a toObject method for converting to plain objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {object} object Original object.
     * @return {object} Plain object.
     */
    function toObject(object) {
        return _.recurse(object, function(item) {
            if (_.hasOfType(item, 'toObject', _.isFunction) || _.hasPrototype(item, 'toObject', _.isFunction)) {
                item = item.toObject();
            }

            return item;
        });
    }

    /**
     * This method is like _.defaultsDeep except it recursively assigns
     * default properties if the provided values do not exist
     * *OR* do not match a given type.
     *
     * Property value types are inferred from the default value. A default
     * of "1" is a number, so any incoming value not of type "Number" are
     * rejected.
     *
     * To allow a default value which is a different type then the validation,
     * you can define both a `validator` and `default` for each property.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {object} models Object of default properties and/or a schema for validation.
     * @param {object} source Object to be validated and merged.
     * @param {boolean} strict Only properties defined in the model allowed through
     * @return {object} Final object
     * @example
     *
     * _.validatedAssign({ id: 0 }, {});
     * // => { id: 0 }
     *
     * _.validatedAssign({ id: 0 }, { id: false });
     * // => { id: 0 }
     *
     *
     * var model = {
     *   name: {
     *     validator: _.isNonEmptyString,
     *     default: false
     *   }
     * };
     *
     * var incoming = {
     *   name: ''
     * };
     *
     * _.validatedAssign(model, incoming);
     * // => { name: false }
     */
    function validatedAssign(models, source, strict) {
        models = _.getObject(models);
        source = _.getObject(source);
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
                        throw new TypeError('Invalid validator function for ' + key + '.');
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

    _.mixin({
        changed: changes,
        changes: changes,
        check: check,
        checkArray: checkArray,
        checkBoolean: checkBoolean,
        checkCollection: checkCollection,
        checkFunction: checkFunction,
        checkKey: checkKey,
        checkNonEmpty: checkNonEmpty,
        checkNumber: checkNumber,
        checkObject: checkObject,
        checkPlainObject: checkPlainObject,
        checkString: checkString,
        exceptKeys: exceptKeys,
        fromQueryString: fromQueryString,
        generateKey: generateKey,
        getArray: getArray,
        getBoolean: getBoolean,
        getFunction: getFunction,
        getNumber: getNumber,
        getObject: getObject,
        getString: getString,
        getPrototype: getPrototype,
        hasOfType: hasOfType,
        hasPrototype: hasPrototype,
        hasPrototypeOfType: hasPrototypeOfType,
        immutable: immutable,
        indexesOf: indexesOf,
        isCollection: isCollection,
        isNonEmptyString: isNonEmptyString,
        mapFiltered: mapFiltered,
        mixInto: mixInto,
        objectWith: objectWith,
        omitDeep: omitDeep,
        recurse: recurse,
        requestSetter: requestSetter,
        slugify: slugify,
        toBool: toBool,
        toQueryString: toQueryString,
        toObject: toObject,
        validatedAssign: validatedAssign,
        validatedDefaultsDeep: validatedAssign,
        with: objectWith
    });

    return _;
}));
