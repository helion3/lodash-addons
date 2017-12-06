import * as _ from 'lodash';

/**
 * Gets the prototype for the given value.
 *
 * @static
 * @memberOf _
 * @category Util
 * @param {*} value Source value
 * @return {object} Found prototype or undefined.
 * @example
 *
 * _.getPrototype(5)
 * // => { toFixed: func(), ... }
 */
function getPrototype(value) {
    let prototype;

    if (!_.isUndefined(value) && !_.isNull(value)) {
        if (!_.isObject(value)) {
            prototype = value.constructor.prototype;
        }
        else if (_.isFunction(value)) {
            prototype = value.prototype;
        }
        else {
            prototype = Object.getPrototypeOf(value);
        }
    }

    return prototype;
}

export default getPrototype;
