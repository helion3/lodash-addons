import * as _ from 'lodash';
import getNumber from './getNumber';

/**
 * Generates a random alphanumeric string with length n.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {int} length Desired length.
 * @return {string} String of random characters.
 * @example
 *
 * _.generateKey(5)
 * // => 'L7IpD'
 */
function generateKey(length) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const possibleLength = possible.length - 1;

    let text = '';
    _.times(getNumber(length, 16), () => {
        text += possible.charAt(_.random(possibleLength));
    });

    return text;
}

export default generateKey;
