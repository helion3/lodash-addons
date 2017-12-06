import * as _ from 'lodash';

/**
 * Converts an object's key/values to a query string.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {object} object Source key/value collection
 * @return {string} Query string
 * @example
 *
 * _.toQueryString({ a: 1, b: 2 })
 * // => a=1&b=2
 */
function toQueryString(object) {
    return _.transform(object, (results, value, key) => {
        results.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }, []).join('&');
}

export default toQueryString;
