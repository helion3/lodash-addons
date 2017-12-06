import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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

export default getFinite;
