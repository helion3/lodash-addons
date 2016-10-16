## Lodash Addons

[![Build Status](https://travis-ci.org/helion3/lodash-addons.svg)](https://travis-ci.org/helion3/lodash-addons)
[![Dependencies](https://david-dm.org/helion3/lodash-addons.svg)](https://david-dm.org/helion3/lodash-addons)

A collection of utility mixins for lodash. Supports both CommonJS and AMD module formats
(meaning, works well in node/webpack or RequireJS-based projects).

### Installation

Node: `npm install -save lodash-addons`

Bower `bower install --save lodash-addons`

# 

<!-- div class="toc-container" -->

<!-- div -->

## `Array`
* <a href="#changes">`_.changes`</a>
* <a href="#exceptKeys">`_.exceptKeys`</a>
* <a href="#indexesOf">`_.indexesOf`</a>

<!-- /div -->

<!-- div -->

## `Collection`
* <a href="#mapFiltered">`_.mapFiltered`</a>
* <a href="#recurse">`_.recurse`</a>

<!-- /div -->

<!-- div -->

## `Lang`
* <a href="#getArray">`_.getArray`</a>
* <a href="#getBoolean">`_.getBoolean`</a>
* <a href="#getFinite">`_.getFinite`</a>
* <a href="#getFunction">`_.getFunction`</a>
* <a href="#getMap">`_.getMap`</a>
* <a href="#getNumber">`_.getNumber`</a>
* <a href="#getObject">`_.getObject`</a>
* <a href="#getPlainObject">`_.getPlainObject`</a>
* <a href="#getSet">`_.getSet`</a>
* <a href="#getString">`_.getString`</a>
* <a href="#getWeakMap">`_.getWeakMap`</a>
* <a href="#getWeakSet">`_.getWeakSet`</a>
* <a href="#toBool">`_.toBool`</a>

<!-- /div -->

<!-- div -->

## `Math`
* <a href="#sign">`_.sign`</a>

<!-- /div -->

<!-- div -->

## `Object`
* <a href="#fromQueryString">`_.fromQueryString`</a>
* <a href="#hasOfType">`_.hasOfType`</a>
* <a href="#hasPrototypeOfType">`_.hasPrototypeOfType`</a>
* <a href="#immutable">`_.immutable`</a>
* <a href="#mixInto">`_.mixInto`</a>
* <a href="#objectWith">`_.objectWith`</a>
* <a href="#omitDeep">`_.omitDeep`</a>
* <a href="#requestSetter">`_.requestSetter`</a>
* <a href="#toObject">`_.toObject`</a>
* <a href="#toQueryString">`_.toQueryString`</a>
* <a href="#validatedAssign">`_.validatedAssign`</a>

<!-- /div -->

<!-- div -->

## `Preconditions`
* <a href="#check">`_.check`</a>
* <a href="#checkArray">`_.checkArray`</a>
* <a href="#checkBoolean">`_.checkBoolean`</a>
* <a href="#checkCollection">`_.checkCollection`</a>
* <a href="#checkFunction">`_.checkFunction`</a>
* <a href="#checkKey">`_.checkKey`</a>
* <a href="#checkMap">`_.checkMap`</a>
* <a href="#checkNonEmpty">`_.checkNonEmpty`</a>
* <a href="#checkNumber">`_.checkNumber`</a>
* <a href="#checkObject">`_.checkObject`</a>
* <a href="#checkPlainObject">`_.checkPlainObject`</a>
* <a href="#checkSet">`_.checkSet`</a>
* <a href="#checkString">`_.checkString`</a>
* <a href="#checkWeakMap">`_.checkWeakMap`</a>
* <a href="#checkWeakSet">`_.checkWeakSet`</a>

<!-- /div -->

<!-- div -->

## `String`
* <a href="#generateKey">`_.generateKey`</a>
* <a href="#isNonEmptyString">`_.isNonEmptyString`</a>
* <a href="#slugify">`_.slugify`</a>

<!-- /div -->

<!-- div -->

## `Util`
* <a href="#getPrototype">`_.getPrototype`</a>

<!-- /div -->

<!-- div -->

## `Methods`
* <a href="#isCollection">`isCollection`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `“Array” Methods`

<!-- div -->

<h3 id="changes"><a href="#changes">#</a>&nbsp;<code>_.changes(first, second)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L57 "View in source") [&#x24C9;][1]

Gets indices for which elements differ between two arrays.

#### Arguments
1. `first` *(array)*: First array
2. `second` *(array)*: Second array

#### Example
```js
_.changes([false, true], [false, false]);
// => [1]
```
---

<!-- /div -->

<!-- div -->

<h3 id="exceptKeys"><a href="#exceptKeys">#</a>&nbsp;<code>_.exceptKeys(array, indices, iteratee)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L324 "View in source") [&#x24C9;][1]

Iterate array skipping given indices.

#### Arguments
1. `array` *(array)*: Source array
2. `indices` *(array)*: Indices to skip
3. `iteratee` *(function)*: Iteratee

#### Example
```js
_.exceptKeys(['a', 'b', 'c', 'd'], [1, 3], function(val) {
  // skips "b" and "d"
});
```
---

<!-- /div -->

<!-- div -->

<h3 id="indexesOf"><a href="#indexesOf">#</a>&nbsp;<code>_.indexesOf(array, predicate)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L731 "View in source") [&#x24C9;][1]

Gets indices for elements which predicate returns truthy for.

#### Arguments
1. `array` *(array)*: Target array
2. `predicate` *(function)*: Predicate value or function.

#### Example
```js
_.indexesOf([3, false, 3], _.isNumber);
// => [0, 2]

_.indexesOf([3, false, 3], 3);
// => [0, 2]
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Collection” Methods`

<!-- div -->

<h3 id="mapFiltered"><a href="#mapFiltered">#</a>&nbsp;<code>_.mapFiltered(array, predicate, iteratee)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L790 "View in source") [&#x24C9;][1]

Map a function to filtered array elements.

#### Arguments
1. `array` *(array)*: Array
2. `predicate` *(function)*: Validation method for each element.
3. `iteratee` *(function)*: Function to call on each valid element.

---

<!-- /div -->

<!-- div -->

<h3 id="recurse"><a href="#recurse">#</a>&nbsp;<code>_.recurse(collection, iteratee)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L900 "View in source") [&#x24C9;][1]

Invoke a function recursively on every element in a collection.

#### Arguments
1. `collection` *(array|object)*: Collection
2. `iteratee` *(function)*: Function to invoke

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Lang” Methods`

<!-- div -->

<h3 id="getArray"><a href="#getArray">#</a>&nbsp;<code>_.getArray(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L405 "View in source") [&#x24C9;][1]

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

<h3 id="getBoolean"><a href="#getBoolean">#</a>&nbsp;<code>_.getBoolean(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L426 "View in source") [&#x24C9;][1]

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

<h3 id="getFinite"><a href="#getFinite">#</a>&nbsp;<code>_.getFinite(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L450 "View in source") [&#x24C9;][1]

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

<h3 id="getFunction"><a href="#getFunction">#</a>&nbsp;<code>_.getFunction(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L468 "View in source") [&#x24C9;][1]

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

<h3 id="getMap"><a href="#getMap">#</a>&nbsp;<code>_.getMap(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L482 "View in source") [&#x24C9;][1]

Returns value if a Map, otherwise a default map.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

---

<!-- /div -->

<!-- div -->

<h3 id="getNumber"><a href="#getNumber">#</a>&nbsp;<code>_.getNumber(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L521 "View in source") [&#x24C9;][1]

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

<h3 id="getObject"><a href="#getObject">#</a>&nbsp;<code>_.getObject(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L539 "View in source") [&#x24C9;][1]

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

<h3 id="getPlainObject"><a href="#getPlainObject">#</a>&nbsp;<code>_.getPlainObject(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L500 "View in source") [&#x24C9;][1]

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

<h3 id="getSet"><a href="#getSet">#</a>&nbsp;<code>_.getSet(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L557 "View in source") [&#x24C9;][1]

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

<h3 id="getString"><a href="#getString">#</a>&nbsp;<code>_.getString(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L575 "View in source") [&#x24C9;][1]

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

<h3 id="getWeakMap"><a href="#getWeakMap">#</a>&nbsp;<code>_.getWeakMap(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L593 "View in source") [&#x24C9;][1]

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

<h3 id="getWeakSet"><a href="#getWeakSet">#</a>&nbsp;<code>_.getWeakSet(value, replacement)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L611 "View in source") [&#x24C9;][1]

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

<h3 id="toBool"><a href="#toBool">#</a>&nbsp;<code>_.toBool(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L1015 "View in source") [&#x24C9;][1]

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

<h3 id="sign"><a href="#sign">#</a>&nbsp;<code>_.sign(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L981 "View in source") [&#x24C9;][1]

Indicates whether a numeric value is positive *(returns `1`) or negative (returns `-1`)*.

#### Arguments
1. `value` *(number)*: Numeric value.

#### Example
```js
_.sign(40)
// => 1

_.sign(-40)
// => -1
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Object” Methods`

<!-- div -->

<h3 id="fromQueryString"><a href="#fromQueryString">#</a>&nbsp;<code>_.fromQueryString(string)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L352 "View in source") [&#x24C9;][1]

Parses query string into key/value object.

#### Arguments
1. `string` *(string)*: Query string.

#### Example
```js
_.fromQueryString('key=value');
// => { key: 'value' }
```
---

<!-- /div -->

<!-- div -->

<h3 id="hasOfType"><a href="#hasOfType">#</a>&nbsp;<code>_.hasOfType(value, property, validator)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L659 "View in source") [&#x24C9;][1]

If _.has returns true, run a validator on value.

#### Arguments
1. `value` *(mixed)*: Collection for _.has
2. `property` *(number|string)*: Propert/key name.
3. `validator` *(function)*: Function to validate value.

#### Example
```js
_.hasOfType({ test: '' }, 'test', _.isString)
// => true
```
---

<!-- /div -->

<!-- div -->

<h3 id="hasPrototypeOfType"><a href="#hasPrototypeOfType">#</a>&nbsp;<code>_.hasPrototypeOfType(value, property, predicate)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L680 "View in source") [&#x24C9;][1]

Returns whether an object has a prototype property of the given type.

#### Arguments
1. `value` *(&#42;)*: Source value.
2. `property` *(string)*: Prototype property.
3. `predicate` *(function)*: Validation function.

---

<!-- /div -->

<!-- div -->

<h3 id="immutable"><a href="#immutable">#</a>&nbsp;<code>_.immutable(object, key, value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L700 "View in source") [&#x24C9;][1]

Creates an immutable property on an object.

#### Arguments
1. `object` *(object)*: Target object
2. `key` *(string)*: Property.
3. `value` *(mixed)*: Value.

---

<!-- /div -->

<!-- div -->

<h3 id="mixInto"><a href="#mixInto">#</a>&nbsp;<code>_.mixInto(target, source)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L804 "View in source") [&#x24C9;][1]

Merge prototype properties from source to target.

#### Arguments
1. `target` *(function|object)*: Target object.
2. `source` *(function|object)*: Object/function to mixin.

---

<!-- /div -->

<!-- div -->

<h3 id="objectWith"><a href="#objectWith">#</a>&nbsp;<code>_.objectWith(object, path, value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L844 "View in source") [&#x24C9;][1]

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

<h3 id="omitDeep"><a href="#omitDeep">#</a>&nbsp;<code>_.omitDeep(object, keys)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L880 "View in source") [&#x24C9;][1]

Run _.omit recursively down a collection.

#### Arguments
1. `object` *(array|object)*: Collection
2. `keys` *(array)*: Array of property/key names to omit

---

<!-- /div -->

<!-- div -->

<h3 id="requestSetter"><a href="#requestSetter">#</a>&nbsp;<code>_.requestSetter(object, property)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L930 "View in source") [&#x24C9;][1]

Gives a setter for `prop` only to the first requesting caller.
<br>
<br>
Creates request[Prop]Setter and get[Prop] methods
on the source object. The first caller to request[Prop]Setter
gets it and therefore is the only one allowed to invoke it.
<br>
<br>
Any caller may use the getter.

#### Arguments
1. `object` *(object)*: Target object.
2. `property` *(string)*: Property name.

---

<!-- /div -->

<!-- div -->

<h3 id="toObject"><a href="#toObject">#</a>&nbsp;<code>_.toObject(object)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L1053 "View in source") [&#x24C9;][1]

Recursively invokes "toObject" on objects which support the method.
<br>
<br>
Many complex objects from libraries like Collections.js, Mongoose,
support to a toObject method for converting to plain objects.

#### Arguments
1. `object` *(object)*: Original object.

---

<!-- /div -->

<!-- div -->

<h3 id="toQueryString"><a href="#toQueryString">#</a>&nbsp;<code>_.toQueryString(object)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L1032 "View in source") [&#x24C9;][1]

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

<!-- div -->

<h3 id="validatedAssign"><a href="#validatedAssign">#</a>&nbsp;<code>_.validatedAssign(models, source, strict)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L1105 "View in source") [&#x24C9;][1]

This method is like _.defaultsDeep except it recursively assigns
default properties if the provided values do not exist
*OR* do not match a given type.
<br>
<br>
Property value types are inferred from the default value. A default
of "1" is a number, so any incoming value not of type "Number" are
rejected.
<br>
<br>
To allow a default value which is a different type then the validation,
you can define both a `validator` and `default` for each property.

#### Arguments
1. `models` *(object)*: Object of default properties and/or a schema for validation.
2. `source` *(object)*: Object to be validated and merged.
3. `strict` *(boolean)*: Only properties defined in the model allowed through

#### Example
```js
_.validatedAssign({ id: 0 }, {});
// => { id: 0 }

_.validatedAssign({ id: 0 }, { id: false });
// => { id: 0 }


var model = {
  name: {
    validator: _.isNonEmptyString,
    default: false
  }
};

var incoming = {
  name: ''
};

_.validatedAssign(model, incoming);
// => { name: false }
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Preconditions” Methods`

<!-- div -->

<h3 id="check"><a href="#check">#</a>&nbsp;<code>_.check(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L76 "View in source") [&#x24C9;][1]

Throw a TypeError if value doesn't match one of any provided validation methods.

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkArray"><a href="#checkArray">#</a>&nbsp;<code>_.checkArray(array)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L107 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't an array.

#### Arguments
1. `array` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkBoolean"><a href="#checkBoolean">#</a>&nbsp;<code>_.checkBoolean(boolean)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L122 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a boolean.

#### Arguments
1. `boolean` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkCollection"><a href="#checkCollection">#</a>&nbsp;<code>_.checkCollection(collection)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L137 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't an array or object.

#### Arguments
1. `collection` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkFunction"><a href="#checkFunction">#</a>&nbsp;<code>_.checkFunction(func)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L152 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a function.

#### Arguments
1. `func` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkKey"><a href="#checkKey">#</a>&nbsp;<code>_.checkKey(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L167 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a number/string.

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkMap"><a href="#checkMap">#</a>&nbsp;<code>_.checkMap(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L182 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a Map.

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkNonEmpty"><a href="#checkNonEmpty">#</a>&nbsp;<code>_.checkNonEmpty(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L197 "View in source") [&#x24C9;][1]

Throw a TypeError if value _.isEmpty

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkNumber"><a href="#checkNumber">#</a>&nbsp;<code>_.checkNumber(number)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L212 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a number.

#### Arguments
1. `number` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkObject"><a href="#checkObject">#</a>&nbsp;<code>_.checkObject(object)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L227 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't an object.

#### Arguments
1. `object` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkPlainObject"><a href="#checkPlainObject">#</a>&nbsp;<code>_.checkPlainObject(object)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L242 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a plain object.

#### Arguments
1. `object` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkSet"><a href="#checkSet">#</a>&nbsp;<code>_.checkSet(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L257 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a Set.

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkString"><a href="#checkString">#</a>&nbsp;<code>_.checkString(string)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L272 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a string.

#### Arguments
1. `string` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkWeakMap"><a href="#checkWeakMap">#</a>&nbsp;<code>_.checkWeakMap(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L287 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a WeakMap.

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- div -->

<h3 id="checkWeakSet"><a href="#checkWeakSet">#</a>&nbsp;<code>_.checkWeakSet(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L302 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a WeakSet.

#### Arguments
1. `value` *(mixed)*: Value

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“String” Methods`

<!-- div -->

<h3 id="generateKey"><a href="#generateKey">#</a>&nbsp;<code>_.generateKey(n)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L376 "View in source") [&#x24C9;][1]

Generates a random alphanumeric string with length n.

#### Arguments
1. `n` *(int)*: Desired length.

#### Example
```js
_.generateKey(5)
// => 'L7IpD'
```
---

<!-- /div -->

<!-- div -->

<h3 id="isNonEmptyString"><a href="#isNonEmptyString">#</a>&nbsp;<code>_.isNonEmptyString(string)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L775 "View in source") [&#x24C9;][1]

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

<h3 id="slugify"><a href="#slugify">#</a>&nbsp;<code>_.slugify(string)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L998 "View in source") [&#x24C9;][1]

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

<h3 id="getPrototype"><a href="#getPrototype">#</a>&nbsp;<code>_.getPrototype(value)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L628 "View in source") [&#x24C9;][1]

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

<!-- div -->

## `Methods`

<!-- div -->

<h3 id="isCollection"><a href="#isCollection">#</a>&nbsp;<code>isCollection(collection)</code></h3>
[&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L753 "View in source") [&#x24C9;][1]

Checks if a value is either an array or an object.

#### Arguments
1. `collection` *(mixed)*: Value to check

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #array "Jump back to the TOC."
