import * as _ from 'lodash';

/**
 * Transforms a value in each element of collection if the path is not undefined.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} collection Array of objects
 * @param {string} path The path of the value to transform
 * @param {function} transformer Callback which returns the transformed value
 * @return {Array} Returns the array of results.
 */
function transformValueMap(collection, path, transformer) {
    _.each(collection, (element) => {
        let val = _.get(element, path);

        if (!_.isUndefined(val)) {
            _.set(element, path, transformer(val));
        }
    });

    return collection;
}

export default transformValueMap;
