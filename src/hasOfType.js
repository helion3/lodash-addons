import * as _ from 'lodash';

/**
 * If _.has returns true, run a validator on value.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {mixed} value Collection for _.has
 * @param {string} path Path
 * @param {function} validator Function to validate value.
 * @return {boolean} Whether collection has prop, and it passes validation
 * @example
 *
 * _.hasOfType({ test: '' }, 'test', _.isString)
 * // => true
 */
function hasOfType(value, path, validator) {
    return _.has(value, path) ? validator(_.get(value, path)) : false;
}

export default hasOfType;
