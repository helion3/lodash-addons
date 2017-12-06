import * as _ from 'lodash';

/**
 * Throw a TypeError if value doesn't match one of any provided validation methods.
 *
 * @static
 * @memberOf _
 * @category Preconditions
 * @param {mixed} value Value
 * @return {void}
 */
function check(value, ...validators) {
    let valid = false;
    _.each(validators, (validator) => {
        return !(valid = validator(value));
    });

    if (!valid) {
        throw new TypeError('Argument is not any of the accepted types.');
    }
}

export default check;
