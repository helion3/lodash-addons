import * as _ from 'lodash';

/**
 * Shorthand object creation when sole property is a variable, or a path.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {[object]} object Existing object (optional)
 * @param {string|number} path Property
 * @param {mixed} value Value
 * @return {object} Resulting object
 * @example
 *
 * // To create a new object:
 *
 * _.objectWith('key', 'value')
 * // => { key: 'value' }
 *
 * _.objectWith('a.deep.path', 'value')
 * // => {
 *   a: {
 *     deep: {
 *   	 path: 'value'
 *     }
 *   }
 * }
 *
 * // Using existing:
 * _.objectWith({ a: 1 }, 'b', 2)
 * // => { a: 1, b: 2 }
 */
function objectWith() {
    const args = _.reverse(arguments);
    const [value, path] = _.take(args, 2);
    const object = _.nth(args, 2) || {};

    return _.set(object, path, value);
}

export default objectWith;
