import * as _ from 'lodash';

/**
 * Generates a url-safe "slug" form of a string.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} string String value.
 * @return {string} URL-safe form of a string.
 * @example
 *
 * _.slugify('A Test');
 * // => a-test
 */
function slugify(string) {
    return _.deburr(_.toString(string).trim().toLowerCase()).replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, '');
}

export default slugify;
