/**
 * Parses a value by passing it to new Date().
 *
 * @static
 * @memberOf _
 * @category Date
 * @param {string} val Value to be parsed
 * @return {Date} Resulting date
 */
function parseDate(val) {
    return new Date(val);
}

export default parseDate;
