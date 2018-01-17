import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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
 * _.getNumber('');
 * // => 0
 *
 * _.getNumber('', 100);
 * // => 100
 */
function getNumber(value, replacement) {
    return baseGetType(_.isNumber, 0, value, replacement);
}

export default getNumber;
