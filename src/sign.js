import * as _ from 'lodash';

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
 * _.sign(10);
 * // => 1
 *
 * _.sign(-10);
 * // => -1
 */
function sign(value) {
    let sign = NaN;

    if (_.isNumber(value)) {
        if (value === 0) {
            sign = value;
        }
        else if (value >= 1) {
            sign = 1;
        }
        else if (value <= -1) {
            sign = -1;
        }
    }

    return sign;
}

export default sign;
