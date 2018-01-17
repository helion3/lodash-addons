import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

/**
 * Returns value if a object, otherwise a default object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {number} replacement Custom default if value is invalid type.
 * @return {number} Final object.
 * @example
 *
 * _.getObject('');
 * // => {}
 */
function getObject(value, replacement) {
    return baseGetType(_.isObject, {}, value, replacement);
}

export default getObject;
