import * as _ from 'lodash';
import toBool from './toBool';

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
 * _.isIterable([]);
 * // => true
 */
function isIterable(object) {
    return toBool(object) && _.isFunction(object[Symbol.iterator]);
}

export default isIterable;
