import * as _ from 'lodash';

/**
 * Iterates over keys of a collection, returning an array of all keys predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {object} collection The object to iterate over.
 * @param {function} iteratee The function invoked per iteration.
 * @return {array} Resulting keys
 */
function filterKeys(collection, iteratee) {
    return _.transform(collection, function(results, val, key) {
        if (iteratee(val, key, collection)) {
            results.push(key);
        }
    }, []);
}

export default filterKeys;
