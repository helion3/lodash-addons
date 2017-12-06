import * as _ from 'lodash';

/**
 * If _.hasIn returns true, run a validator on value.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {mixed} value Collection for _.hasIn
 * @param {string|number} path Path.
 * @param {function} validator Function to validate value.
 * @return {boolean} Whether collection has the path and it passes validation
 */
function hasInOfType(value, path, validator) {
    return _.hasIn(value, path) ? validator(_.get(value, path)) : false;
}

export default hasInOfType;
