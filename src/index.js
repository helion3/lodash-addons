import * as _ from 'lodash';
import check from './check';
import differenceKeys from './differenceKeys';
import filterKeys from './filterKeys';
import generateKey from './generateKey';
import getArray from './getArray';
import getBoolean from './getBoolean';
import getFinite from './getFinite';
import getFunction from './getFunction';
import getNumber from './getNumber';
import getMap from './getMap';
import getObject from './getObject';
import getPlainObject from './getPlainObject';
import getPrototype from './getPrototype';
import getSet from './getSet';
import getString from './getString';
import getWeakMap from './getWeakMap';
import getWeakSet from './getWeakSet';
import hasInOfType from './hasInOfType';
import hasOfType from './hasOfType';
import isIterable from './isIterable';
import isNonEmptyString from './isNonEmptyString';
import objectWith from './objectWith';
import parseQueryString from './parseQueryString';
import sign from './sign';
import slugify from './slugify';
import toBool from './toBool';
import toDate from './toDate';
import toQueryString from './toQueryString';
import transformValueMap from './transformValueMap';

_.mixin({
    check,
    differenceKeys,
    filterKeys,
    generateKey,
    getArray,
    getBoolean,
    getFinite,
    getFunction,
    getMap,
    getNumber,
    getObject,
    getPlainObject,
    getPrototype,
    getSet,
    getString,
    getWeakMap,
    getWeakSet,
    hasInOfType,
    hasOfType,
    isIterable,
    isNonEmptyString,
    objectWith,
    parseQueryString,
    sign,
    slugify,
    toBool,
    toDate,
    toQueryString,
    transformValueMap,

    // Aliases
    fromQueryString: parseQueryString,
    parseDate: toDate,
    with: objectWith
});

export default _;
