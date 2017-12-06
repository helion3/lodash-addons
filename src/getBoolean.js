import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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

export default getBoolean;
