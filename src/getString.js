import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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
 * _.getString(false);
 * // => ''
 */
function getString(value, replacement) {
    return baseGetType(_.isString, '', value, replacement);
}

export default getString;
