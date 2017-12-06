## Lodash Addons

[![Build Status](https://travis-ci.org/helion3/lodash-addons.svg)](https://travis-ci.org/helion3/lodash-addons)
[![Dependencies](https://david-dm.org/helion3/lodash-addons.svg)](https://david-dm.org/helion3/lodash-addons)

A collection of utility mixins for lodash. Supports both CommonJS and AMD module formats
(meaning, works well with module bundlers or RequireJS-based projects).

### Installation

- Yarn: `yarn add --dev lodash-addons`
- NPM: `npm install --save-dev lodash-addons`

#

<!-- div class="toc-container" -->

<!-- div -->

## `Array`
* <a href="#_transformvaluemapcollection-path-transformer">`_.transformValueMap`</a>

<!-- /div -->

<!-- div -->

## `Collection`
* <a href="#_differencekeysfirst-second">`_.differenceKeys`</a>
* <a href="#_filterkeyscollection-iteratee">`_.filterKeys`</a>

<!-- /div -->

<!-- div -->

## `Date`
* <a href="#_parsedateval">`_.parseDate`</a>

<!-- /div -->

<!-- div -->

## `Lang`
* <a href="#_getarrayvalue-replacement">`_.getArray`</a>
* <a href="#_getbooleanvalue-replacement">`_.getBoolean`</a>
* <a href="#_getfinitevalue-replacement">`_.getFinite`</a>
* <a href="#_getfunctionvalue-replacement">`_.getFunction`</a>
* <a href="#_getmapvalue-replacement">`_.getMap`</a>
* <a href="#_getnumbervalue-replacement">`_.getNumber`</a>
* <a href="#_getobjectvalue-replacement">`_.getObject`</a>
* <a href="#_getplainobjectvalue-replacement">`_.getPlainObject`</a>
* <a href="#_getsetvalue-replacement">`_.getSet`</a>
* <a href="#_getstringvalue-replacement">`_.getString`</a>
* <a href="#_getweakmapvalue-replacement">`_.getWeakMap`</a>
* <a href="#_getweaksetvalue-replacement">`_.getWeakSet`</a>
* <a href="#_isiterableobject">`_.isIterable`</a>
* <a href="#_isnonemptystringstring">`_.isNonEmptyString`</a>
* <a href="#_toboolvalue">`_.toBool`</a>

<!-- /div -->

<!-- div -->

## `Math`
* <a href="#_signvalue">`_.sign`</a>

<!-- /div -->

<!-- div -->

## `Object`
* <a href="#_hasinoftypevalue-path-validator">`_.hasInOfType`</a>
* <a href="#_hasoftypevalue-path-validator">`_.hasOfType`</a>
* <a href="#_objectwithobject-path-value">`_.objectWith`</a>
* <a href="#_parsequerystringstring">`_.parseQueryString`</a>
* <a href="#_toquerystringobject">`_.toQueryString`</a>

<!-- /div -->

<!-- div -->

## `Preconditions`
* <a href="#_checkvalue">`_.check`</a>

<!-- /div -->

<!-- div -->

## `String`
* <a href="#_generatekeylength">`_.generateKey`</a>
* <a href="#_slugifystring">`_.slugify`</a>

<!-- /div -->

<!-- div -->

## `Util`
* <a href="#_getprototypevalue">`_.getPrototype`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `“Array” Methods`

<!-- div -->

<h3 id="_transformvaluemapcollection-path-transformer"><code>_.transformValueMap(collection, path, transformer)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L664 "View in source") [&#x24C9;][1]

Transforms a value in each element of collection if the path is not undefined.

#### Arguments
1. `collection` *(Array)*: Array of objects
2. `path` *(string)*: The path of the value to transform
3. `transformer` *(function)*: Callback which returns the transformed value

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Collection” Methods`

<!-- div -->

<h3 id="_differencekeysfirst-second"><code>_.differenceKeys(first, second)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L72 "View in source") [&#x24C9;][1]

Gets indices for which elements differ between two arrays.

#### Arguments
1. `first` *(array)*: First array
2. `second` *(array)*: Second array

#### Example
```js
_.differenceKeys([false, true], [false, false]);
// => [1]
```
---

<!-- /div -->

<!-- div -->

<h3 id="_filterkeyscollection-iteratee"><code>_.filterKeys(collection, iteratee)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L50 "View in source") [&#x24C9;][1]

Iterates over keys of a collection, returning an array of all keys predicate returns truthy for.
The predicate is invoked with three arguments: *(value, index|key, collection)*.

#### Arguments
1. `collection` *(object)*: The object to iterate over.
2. `iteratee` *(function)*: The function invoked per iteration.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Date” Methods`

<!-- div -->

<h3 id="_parsedateval"><code>_.parseDate(val)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L630 "View in source") [&#x24C9;][1]

Parses a value by passing it to new Date().

#### Arguments
1. `val` *(string)*: Value to be parsed

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Lang” Methods`

<!-- div -->

<h3 id="_getarrayvalue-replacement"><code>_.getArray(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L165 "View in source") [&#x24C9;][1]

Returns value if an array, otherwise a default.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getArray(null)
// => []

_.getArray(null, ['test'])
// => ['test']
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getbooleanvalue-replacement"><code>_.getBoolean(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L186 "View in source") [&#x24C9;][1]

Returns value if a boolean, otherwise a default boolean.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getBoolean(null)
// => false

_.getBoolean(null, true)
// => true
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getfinitevalue-replacement"><code>_.getFinite(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L210 "View in source") [&#x24C9;][1]

Returns value if a finite number, otherwise a default number.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getFinite('')
// => 0

_.getFinite('', 100)
// => 100

_.getFinite(NaN, 25)
// => 25
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getfunctionvalue-replacement"><code>_.getFunction(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L228 "View in source") [&#x24C9;][1]

Returns value if a function, otherwise a default function.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getFunction(null)
// => function () {}
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getmapvalue-replacement"><code>_.getMap(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L242 "View in source") [&#x24C9;][1]

Returns value if a Map, otherwise a default map.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

---

<!-- /div -->

<!-- div -->

<h3 id="_getnumbervalue-replacement"><code>_.getNumber(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L119 "View in source") [&#x24C9;][1]

Returns value if a number, otherwise a default number.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getNumber('')
// => 0

_.getNumber('', 100)
// => 100
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getobjectvalue-replacement"><code>_.getObject(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L260 "View in source") [&#x24C9;][1]

Returns value if a object, otherwise a default object.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getObject('')
// => {}
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getplainobjectvalue-replacement"><code>_.getPlainObject(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L278 "View in source") [&#x24C9;][1]

Returns value if a plain object, otherwise a default object.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getPlainObject('')
// => {}
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getsetvalue-replacement"><code>_.getSet(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L325 "View in source") [&#x24C9;][1]

Returns value if a Set, otherwise a default set.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(set)*: Custom default if value is invalid type.

#### Example
```js
_.getSet('')
// => Set()
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getstringvalue-replacement"><code>_.getString(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L343 "View in source") [&#x24C9;][1]

Returns value if a string, otherwise a default string.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getString(false)
// => ''
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getweakmapvalue-replacement"><code>_.getWeakMap(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L361 "View in source") [&#x24C9;][1]

Returns value if a WeakMap, otherwise a default WeakMap.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(weakmap)*: Custom default if value is invalid type.

#### Example
```js
_.getWeakMap(false)
// => ''
```
---

<!-- /div -->

<!-- div -->

<h3 id="_getweaksetvalue-replacement"><code>_.getWeakSet(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L379 "View in source") [&#x24C9;][1]

Returns value if a WeakSet, otherwise a default WeakSet.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(weakset)*: Custom default if value is invalid type.

#### Example
```js
_.getWeakSet(false)
// => ''
```
---

<!-- /div -->

<!-- div -->

<h3 id="_isiterableobject"><code>_.isIterable(object)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L447 "View in source") [&#x24C9;][1]

Checks if value is iterable.

#### Arguments
1. `object` *(object)*: An object

#### Example
```js
_.isIterable([])
// => true
```
---

<!-- /div -->

<!-- div -->

<h3 id="_isnonemptystringstring"><code>_.isNonEmptyString(string)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L464 "View in source") [&#x24C9;][1]

Checks if value is a non-empty string.

#### Arguments
1. `string` *(object)*: String

#### Example
```js
_.isNonEmptyString('')
// => false
```
---

<!-- /div -->

<!-- div -->

<h3 id="_toboolvalue"><code>_.toBool(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L430 "View in source") [&#x24C9;][1]

Converts a value to a boolean.

#### Arguments
1. `value` *(&#42;)*: Source value

#### Example
```js
_.toBool(1)
// => true
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Math” Methods`

<!-- div -->

<h3 id="_signvalue"><code>_.sign(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L588 "View in source") [&#x24C9;][1]

Returns a number representing the sign of `value`.
<br>
<br>
If `value` is a positive number, negative number, positive zero or negative zero,
the function will return `1`, `-1`, `0` or `-0` respectively. Otherwise, NaN is returned.

#### Arguments
1. `value` *(number)*: A number

#### Returns
*(number)*: A number representing the sign

#### Example
```js
sign(10)
// => 1

sign(-10)
// => -1
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Object” Methods`

<!-- div -->

<h3 id="_hasinoftypevalue-path-validator"><code>_.hasInOfType(value, path, validator)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L394 "View in source") [&#x24C9;][1]

If _.hasIn returns true, run a validator on value.

#### Arguments
1. `value` *(mixed)*: Collection for _.hasIn
2. `path` *(number|string)*: Path.
3. `validator` *(function)*: Function to validate value.

---

<!-- /div -->

<!-- div -->

<h3 id="_hasoftypevalue-path-validator"><code>_.hasOfType(value, path, validator)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L413 "View in source") [&#x24C9;][1]

If _.has returns true, run a validator on value.

#### Arguments
1. `value` *(mixed)*: Collection for _.has
2. `path` *(string)*: Path
3. `validator` *(function)*: Function to validate value.

#### Example
```js
_.hasOfType({ test: '' }, 'test', _.isString)
// => true
```
---

<!-- /div -->

<!-- div -->

<h3 id="_objectwithobject-path-value"><code>_.objectWith(object, path, value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L536 "View in source") [&#x24C9;][1]

Shorthand object creation when sole property is a variable, or a path.

#### Arguments
1. `object` *(): Existing object &#42;(optional)*&#42;
2. `path` *(number|string)*: Property
3. `value` *(mixed)*: Value

#### Example
```js
// To create a new object:

_.objectWith('key', 'value')
// => { key: 'value' }

_.objectWith('a.deep.path', 'value')
// => {
  a: {
    deep: {
  	 path: 'value'
    }
  }
}

// Using existing:
_.objectWith({ a: 1 }, 'b', 2)
// => { a: 1, b: 2 }
```
---

<!-- /div -->

<!-- div -->

<h3 id="_parsequerystringstring"><code>_.parseQueryString(string)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L562 "View in source") [&#x24C9;][1]

Parses query string into key/value object.

#### Arguments
1. `string` *(string)*: Query string.

#### Example
```js
_.parseQueryString('key=value');
// => { key: 'value' }
```
---

<!-- /div -->

<!-- div -->

<h3 id="_toquerystringobject"><code>_.toQueryString(object)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L647 "View in source") [&#x24C9;][1]

Converts an object's key/values to a query string.

#### Arguments
1. `object` *(object)*: Source key/value collection

#### Example
```js
_.toQueryString({ a: 1, b: 2 })
// => a=1&b=2
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Preconditions” Methods`

<!-- div -->

<h3 id="_checkvalue"><code>_.check(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L23 "View in source") [&#x24C9;][1]

Throw a TypeError if value doesn't match one of any provided validation methods.

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“String” Methods`

<!-- div -->

<h3 id="_generatekeylength"><code>_.generateKey(length)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L136 "View in source") [&#x24C9;][1]

Generates a random alphanumeric string with length n.

#### Arguments
1. `length` *(int)*: Desired length.

#### Example
```js
_.generateKey(5)
// => 'L7IpD'
```
---

<!-- /div -->

<!-- div -->

<h3 id="_slugifystring"><code>_.slugify(string)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L617 "View in source") [&#x24C9;][1]

Generates a url-safe "slug" form of a string.

#### Arguments
1. `string` *(string)*: String value.

#### Example
```js
_.slugify('A Test')
// => a-test
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Util” Methods`

<!-- div -->

<h3 id="_getprototypevalue"><code>_.getPrototype(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/dist/lodash-addons.js#L295 "View in source") [&#x24C9;][1]

Gets the prototype for the given value.

#### Arguments
1. `value` *(&#42;)*: Source value

#### Example
```js
_.getPrototype(5)
// => { toFixed: func(), ... }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #array "Jump back to the TOC."
