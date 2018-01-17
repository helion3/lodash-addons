import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

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
 * _.getWeakMap(false);
 * // => ''
 */
function getWeakMap(value, replacement) {
    return baseGetType(_.isWeakMap, new WeakMap(), value, replacement);
}

export default getWeakMap;
