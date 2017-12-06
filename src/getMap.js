import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

/**
 * Returns value if a Map, otherwise a default map.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {number} replacement Custom default if value is invalid type.
 * @return {number} Final number.
 */
function getMap(value, replacement) {
    return baseGetType(_.isMap, new Map(), value, replacement);
}

export default getMap;
