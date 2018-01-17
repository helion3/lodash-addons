import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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
 * _.getArray(null);
 * // => []
 *
 * _.getArray(null, ['test']);
 * // => ['test']
 */
function getArray(value, replacement) {
    return baseGetType(_.isArray, [], value, replacement);
}

export default getArray;
