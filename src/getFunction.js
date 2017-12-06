import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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

export default getFunction;
