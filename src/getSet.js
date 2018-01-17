import * as _ from 'lodash';
import baseGetType from './internal/baseGetType';

/**
 * Returns value if a Set, otherwise a default set.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {mixed} value Source value
 * @param {set} replacement Custom default if value is invalid type.
 * @return {set} Final Set.
 * @example
 *
 * _.getSet('');
 * // => Set()
 */
function getSet(value, replacement) {
    return baseGetType(_.isSet, new Set(), value, replacement);
}

export default getSet;
