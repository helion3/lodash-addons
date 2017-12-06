/**
 * Base function for returning a default when the given value fails validation.
 *
 * @private
 * @param {function} validator Validation function.
 * @param {*} baseDefault Base default value.
 * @param {*} value Given value.
 * @param {*} replacement Custom replacement.
 * @return {*} Final value.
 */
function baseGetType(validator, baseDefault, value, replacement) {
    let result;

    if (validator(value)) {
        result = value;
    }
    else if (validator(replacement)) {
        result = replacement;
    }
    else {
        result = baseDefault;
    }

    return result;
}

export default baseGetType;
