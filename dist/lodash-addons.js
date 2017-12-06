/* Lodash Addons
 * @version 2.0.0
 * https://github.com/helion3/lodash-addons
 * @copyright Copyright 2015 Helion3, and other contributors
 * @license Licensed under MIT
 *          see https://github.com/helion3/lodash-addons/blob/master/LICENSE
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash')) :
	typeof define === 'function' && define.amd ? define(['lodash'], factory) :
	(global.LodashAddons = factory(global._));
}(this, (function (_) { 'use strict';

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
    var valid = false;

    for (var _len = arguments.length, validators = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        validators[_key - 1] = arguments[_key];
    }

    _.each(validators, function (validator) {
        return !(valid = validator(value));
    });

    if (!valid) {
        throw new TypeError('Argument is not any of the accepted types.');
    }
}

/**
 * Iterates over keys of a collection, returning an array of all keys predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {object} collection The object to iterate over.
 * @param {function} iteratee The function invoked per iteration.
 * @return {array} Resulting keys
 */
function filterKeys(collection, iteratee) {
    return _.transform(collection, function (results, val, key) {
        if (iteratee(val, key, collection)) {
            results.push(key);
        }
    }, []);
}

/**
 * Gets indices for which elements differ between two arrays.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {array} first First array
 * @param {array} second Second array
 * @return {array} Array of indices of differing elements
 * @example
 *
 * _.differenceKeys([false, true], [false, false]);
 * // => [1]
 */
function differenceKeys(first, second) {
    return filterKeys(first, function (val, key) {
        return val !== second[key];
    });
}

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
    var result = void 0;

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
 * Generates a random alphanumeric string with length n.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {int} length Desired length.
 * @return {string} String of random characters.
 * @example
 *
 * _.generateKey(5)
 * // => 'L7IpD'
 */
function generateKey(length) {
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var possibleLength = possible.length - 1;

    var text = '';
    _.times(getNumber(length, 16), function () {
        text += possible.charAt(_.random(possibleLength));
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
 * Returns value if a finite number, otherwise a default number.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {number} replacement Custom default if value is invalid type.
 * @return {number} Final number.
 * @example
 *
 * _.getFinite('')
 * // => 0
 *
 * _.getFinite('', 100)
 * // => 100
 *
 * _.getFinite(NaN, 25)
 * // => 25
 */
function getFinite(value, replacement) {
  return baseGetType(_.isFinite, 0, value, replacement);
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
  return baseGetType(_.isFunction, _.noop, value, replacement);
}

/**
 * Returns value if a Map, otherwise a default map.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {number} replacement Custom default if value is invalid type.
 * @return {number} Final number.
 */
function getMap(value, replacement) {
  return baseGetType(_.isMap, new Map(), value, replacement);
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
 * Returns value if a plain object, otherwise a default object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {number} replacement Custom default if value is invalid type.
 * @return {number} Final object.
 * @example
 *
 * _.getPlainObject('')
 * // => {}
 */
function getPlainObject(value, replacement) {
  return baseGetType(_.isPlainObject, {}, value, replacement);
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
    var prototype = void 0;

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
 * Returns value if a Set, otherwise a default set.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {set} replacement Custom default if value is invalid type.
 * @return {set} Final Set.
 * @example
 *
 * _.getSet('')
 * // => Set()
 */
function getSet(value, replacement) {
  return baseGetType(_.isSet, new Set(), value, replacement);
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
 * Returns value if a WeakMap, otherwise a default WeakMap.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {weakmap} replacement Custom default if value is invalid type.
 * @return {weakmap} Final map.
 * @example
 *
 * _.getWeakMap(false)
 * // => ''
 */
function getWeakMap(value, replacement) {
  return baseGetType(_.isWeakMap, new WeakMap(), value, replacement);
}

/**
 * Returns value if a WeakSet, otherwise a default WeakSet.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {weakset} replacement Custom default if value is invalid type.
 * @return {weakset} Final set.
 * @example
 *
 * _.getWeakSet(false)
 * // => ''
 */
function getWeakSet(value, replacement) {
  return baseGetType(_.isWeakSet, new WeakSet(), value, replacement);
}

/**
 * If _.hasIn returns true, run a validator on value.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {mixed} value Collection for _.hasIn
 * @param {string|number} path Path.
 * @param {function} validator Function to validate value.
 * @return {boolean} Whether collection has the path and it passes validation
 */
function hasInOfType(value, path, validator) {
  return _.hasIn(value, path) ? validator(_.get(value, path)) : false;
}

/**
 * If _.has returns true, run a validator on value.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {mixed} value Collection for _.has
 * @param {string} path Path
 * @param {function} validator Function to validate value.
 * @return {boolean} Whether collection has prop, and it passes validation
 * @example
 *
 * _.hasOfType({ test: '' }, 'test', _.isString)
 * // => true
 */
function hasOfType(value, path, validator) {
  return _.has(value, path) ? validator(_.get(value, path)) : false;
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
 * Checks if value is iterable.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {object} object An object
 * @return {boolean} True if iterable
 * @example
 *
 * _.isIterable([])
 * // => true
 */
function isIterable(object) {
  return toBool(object) && _.isFunction(object[Symbol.iterator]);
}

/**
 * Checks if value is a non-empty string.
 *
 * @static
 * @memberOf _
 * @category Lang
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

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

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
  var args = _.reverse(arguments);

  var _$take = _.take(args, 2),
      _$take2 = slicedToArray(_$take, 2),
      value = _$take2[0],
      path = _$take2[1];

  var object = _.nth(args, 2) || {};

  return _.set(object, path, value);
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
 * _.parseQueryString('key=value');
 * // => { key: 'value' }
 */
function parseQueryString(string) {
    return _.transform(_.toString(string).split('&'), function (result, segment) {
        var split = segment.split('=');
        result[decodeURIComponent(split[0])] = decodeURIComponent(split[1]);
    }, {});
}

/**
 * Returns a number representing the sign of `value`.
 *
 * If `value` is a positive number, negative number, positive zero or negative zero,
 * the function will return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {number} value A number
 * @returns {number} A number representing the sign
 * @example
 *
 * sign(10)
 * // => 1
 *
 * sign(-10)
 * // => -1
 */
function sign(value) {
    var sign = NaN;

    if (_.isNumber(value)) {
        if (value === 0) {
            sign = value;
        } else if (value >= 1) {
            sign = 1;
        } else if (value <= -1) {
            sign = -1;
        }
    }

    return sign;
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
  return _.toString(string).trim().toLowerCase().replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, '');
}

/**
 * Parses a value by passing it to new Date().
 *
 * @static
 * @memberOf _
 * @category Date
 * @param {string} val Value to be parsed
 * @return {Date} Resulting date
 */
function parseDate(val) {
  return new Date(val);
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
    return _.transform(object, function (results, value, key) {
        results.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }, []).join('&');
}

/**
 * Transforms a value in each element of collection if the path is not undefined.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} collection Array of objects
 * @param {string} path The path of the value to transform
 * @param {function} transformer Callback which returns the transformed value
 * @return {Array} Returns the array of results.
 */
function transformValueMap(collection, path, transformer) {
    _.each(collection, function (element) {
        var val = _.get(element, path);

        if (!_.isUndefined(val)) {
            _.set(element, path, transformer(val));
        }
    });

    return collection;
}

_.mixin({
    check: check,
    differenceKeys: differenceKeys,
    filterKeys: filterKeys,
    generateKey: generateKey,
    getArray: getArray,
    getBoolean: getBoolean,
    getFinite: getFinite,
    getFunction: getFunction,
    getMap: getMap,
    getNumber: getNumber,
    getObject: getObject,
    getPlainObject: getPlainObject,
    getPrototype: getPrototype,
    getSet: getSet,
    getString: getString,
    getWeakMap: getWeakMap,
    getWeakSet: getWeakSet,
    hasInOfType: hasInOfType,
    hasOfType: hasOfType,
    isIterable: isIterable,
    isNonEmptyString: isNonEmptyString,
    objectWith: objectWith,
    parseQueryString: parseQueryString,
    sign: sign,
    slugify: slugify,
    toBool: toBool,
    toDate: parseDate,
    toQueryString: toQueryString,
    transformValueMap: transformValueMap,

    // Aliases
    fromQueryString: parseQueryString,
    parseDate: parseDate,
    with: objectWith
});

return _;

})));
