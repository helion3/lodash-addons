import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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

export default getWeakSet;
