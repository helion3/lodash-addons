import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

/**
 * Returns value if a plain object, otherwise a default object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {number} replacement Custom default if value is invalid type.
 * @return {number} Final object.
 * @example
 *
 * _.getPlainObject('');
 * // => {}
 */
function getPlainObject(value, replacement) {
    return baseGetType(_.isPlainObject, {}, value, replacement);
}

export default getPlainObject;
