import filterKeys from './filterKeys';

/**
 * Gets indices for which elements differ between two arrays.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {array} first First array
 * @param {array} second Second array
 * @return {array} Array of indices of differing elements
 * @example
 *
 * _.differenceKeys([false, true], [false, false]);
 * // => [1]
 */
function differenceKeys(first, second) {
    return filterKeys(first, function(val, key) {
        return val !== second[key];
    });
}

export default differenceKeys;
