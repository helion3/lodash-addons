import * as _ from 'lodash';

/**
 * Checks if value is a non-empty string.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {object} string String
 * @return {boolean} True if a non-empty string.
 * @example
 *
 * _.isNonEmptyString('');
 * // => false
 */
function isNonEmptyString(string) {
    return _.isString(string) && string.trim() !== '';
}

export default isNonEmptyString;
