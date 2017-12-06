import * as _ from 'lodash';

/**
 * Parses query string into key/value object.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {string} string Query string.
 * @return {object} Key/value map.
 * @example
 *
 * _.parseQueryString('key=value');
 * // => { key: 'value' }
 */
function parseQueryString(string) {
    return _.transform(_.toString(string).split('&'), (result, segment) => {
        const split = segment.split('=');
        result[decodeURIComponent(split[0])] = decodeURIComponent(split[1]);
    }, {});
}

export default parseQueryString;
