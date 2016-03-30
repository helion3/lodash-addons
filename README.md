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
* <a href="#getFunction">`_.getFunction`</a>
* <a href="#getNumber">`_.getNumber`</a>
* <a href="#getObject">`_.getObject`</a>
* <a href="#getString">`_.getString`</a>
* <a href="#toBool">`_.toBool`</a>

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
* <a href="#checkNonEmpty">`_.checkNonEmpty`</a>
* <a href="#checkNumber">`_.checkNumber`</a>
* <a href="#checkObject">`_.checkObject`</a>
* <a href="#checkPlainObject">`_.checkPlainObject`</a>
* <a href="#checkString">`_.checkString`</a>

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
* <a href="#hasPrototype">`_.hasPrototype`</a>

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

### <a id="changes"></a>`_.changes(first, second)`
<a href="#changes">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L57 "View in source") [&#x24C9;][1]

Gets indices for which elements differ between two arrays.

#### Arguments
1. `first` *(array)*: First array
2. `second` *(array)*: Second array

#### Example
```js
_.changes([false, true], [false, false]);
// => [1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="exceptKeys"></a>`_.exceptKeys(array, indices, iteratee)`
<a href="#exceptKeys">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L264 "View in source") [&#x24C9;][1]

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
* * *

<!-- /div -->

<!-- div -->

### <a id="indexesOf"></a>`_.indexesOf(array, predicate)`
<a href="#indexesOf">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L588 "View in source") [&#x24C9;][1]

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
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Collection” Methods`

<!-- div -->

### <a id="mapFiltered"></a>`_.mapFiltered(array, predicate, iteratee)`
<a href="#mapFiltered">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L642 "View in source") [&#x24C9;][1]

Map a function to filtered array elements.

#### Arguments
1. `array` *(array)*: Array
2. `predicate` *(function)*: Validation method for each element.
3. `iteratee` *(function)*: Function to call on each valid element.

* * *

<!-- /div -->

<!-- div -->

### <a id="recurse"></a>`_.recurse(collection, iteratee)`
<a href="#recurse">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L752 "View in source") [&#x24C9;][1]

Invoke a function recursively on every element in a collection.

#### Arguments
1. `collection` *(object|array)*: Collection
2. `iteratee` *(function)*: Function to invoke

* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Lang” Methods`

<!-- div -->

### <a id="getArray"></a>`_.getArray(value, replacement)`
<a href="#getArray">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L345 "View in source") [&#x24C9;][1]

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
* * *

<!-- /div -->

<!-- div -->

### <a id="getBoolean"></a>`_.getBoolean(value, replacement)`
<a href="#getBoolean">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L366 "View in source") [&#x24C9;][1]

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
* * *

<!-- /div -->

<!-- div -->

### <a id="getFunction"></a>`_.getFunction(value, replacement)`
<a href="#getFunction">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L384 "View in source") [&#x24C9;][1]

Returns value if a function, otherwise a default function.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getFunction(null)
// => function () {}
```
* * *

<!-- /div -->

<!-- div -->

### <a id="getNumber"></a>`_.getNumber(value, replacement)`
<a href="#getNumber">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L423 "View in source") [&#x24C9;][1]

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
* * *

<!-- /div -->

<!-- div -->

### <a id="getObject"></a>`_.getObject(value, replacement)`
<a href="#getObject">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L402 "View in source") [&#x24C9;][1]

Returns value if a object, otherwise a default object.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getObject('')
// => {}
```
* * *

<!-- /div -->

<!-- div -->

### <a id="getString"></a>`_.getString(value, replacement)`
<a href="#getString">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L441 "View in source") [&#x24C9;][1]

Returns value if a string, otherwise a default string.

#### Arguments
1. `value` *(mixed)*: Source value
2. `replacement` *(number)*: Custom default if value is invalid type.

#### Example
```js
_.getString(false)
// => ''
```
* * *

<!-- /div -->

<!-- div -->

### <a id="toBool"></a>`_.toBool(value)`
<a href="#toBool">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L847 "View in source") [&#x24C9;][1]

Converts a value to a boolean.

#### Arguments
1. `value` *(&#42;)*: Source value

#### Example
```js
_.toBool(1)
// => true
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Object” Methods`

<!-- div -->

### <a id="fromQueryString"></a>`_.fromQueryString(string)`
<a href="#fromQueryString">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L292 "View in source") [&#x24C9;][1]

Parses query string into key/value object.

#### Arguments
1. `string` *(string)*: Query string.

#### Example
```js
_.fromQueryString('key=value');
// => { key: 'value' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="hasOfType"></a>`_.hasOfType(value, property, validator)`
<a href="#hasOfType">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L489 "View in source") [&#x24C9;][1]

If _.has returns true, run a validator on value.

#### Arguments
1. `value` *(mixed)*: Collection for _.has
2. `property` *(string|number)*: Propert/key name.
3. `validator` *(function)*: Function to validate value.

#### Example
```js
_.hasOfType({ test: '' }, 'test', _.isString)
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="hasPrototypeOfType"></a>`_.hasPrototypeOfType(value, property, predicate)`
<a href="#hasPrototypeOfType">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L537 "View in source") [&#x24C9;][1]

Returns whether an object has a prototype property of the given type.

#### Arguments
1. `value` *(&#42;)*: Source value.
2. `property` *(string)*: Prototype property.
3. `predicate` *(function)*: Validation function.

* * *

<!-- /div -->

<!-- div -->

### <a id="immutable"></a>`_.immutable(object, key, value)`
<a href="#immutable">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L557 "View in source") [&#x24C9;][1]

Creates an immutable property on an object.

#### Arguments
1. `object` *(object)*: Target object
2. `key` *(string)*: Property.
3. `value` *(mixed)*: Value.

* * *

<!-- /div -->

<!-- div -->

### <a id="mixInto"></a>`_.mixInto(target, source)`
<a href="#mixInto">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L656 "View in source") [&#x24C9;][1]

Merge prototype properties from source to target.

#### Arguments
1. `target` *(object|function)*: Target object.
2. `source` *(object|function)*: Object/function to mixin.

* * *

<!-- /div -->

<!-- div -->

### <a id="objectWith"></a>`_.objectWith(object, path, value)`
<a href="#objectWith">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L696 "View in source") [&#x24C9;][1]

Shorthand object creation when sole property is a variable, or a path.

#### Arguments
1. `object` *(&#91;object&#93;)*: Existing object *(optional)*
2. `path` *(string|number)*: Property
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
* * *

<!-- /div -->

<!-- div -->

### <a id="omitDeep"></a>`_.omitDeep(object, keys)`
<a href="#omitDeep">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L732 "View in source") [&#x24C9;][1]

Run _.omit recursively down a collection.

#### Arguments
1. `object` *(array|object)*: Collection
2. `keys` *(array)*: Array of property/key names to omit

* * *

<!-- /div -->

<!-- div -->

### <a id="requestSetter"></a>`_.requestSetter(object, property)`
<a href="#requestSetter">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L782 "View in source") [&#x24C9;][1]

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

* * *

<!-- /div -->

<!-- div -->

### <a id="toObject"></a>`_.toObject(object)`
<a href="#toObject">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L885 "View in source") [&#x24C9;][1]

Recursively invokes "toObject" on objects which support the method.
<br>
<br>
Many complex objects from libraries like Collections.js, Mongoose,
support to a toObject method for converting to plain objects.

#### Arguments
1. `object` *(object)*: Original object.

* * *

<!-- /div -->

<!-- div -->

### <a id="toQueryString"></a>`_.toQueryString(object)`
<a href="#toQueryString">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L864 "View in source") [&#x24C9;][1]

Converts an object's key/values to a query string.

#### Arguments
1. `object` *(object)*: Source key/value collection

#### Example
```js
_.toQueryString({ a: 1, b: 2 })
// => a=1&b=2
```
* * *

<!-- /div -->

<!-- div -->

### <a id="validatedAssign"></a>`_.validatedAssign(models, source, strict)`
<a href="#validatedAssign">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L937 "View in source") [&#x24C9;][1]

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
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Preconditions” Methods`

<!-- div -->

### <a id="check"></a>`_.check(value)`
<a href="#check">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L76 "View in source") [&#x24C9;][1]

Throw a TypeError if value doesn't match one of any provided validation methods.

#### Arguments
1. `value` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkArray"></a>`_.checkArray(array)`
<a href="#checkArray">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L107 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't an array.

#### Arguments
1. `array` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkBoolean"></a>`_.checkBoolean(boolean)`
<a href="#checkBoolean">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L122 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a boolean.

#### Arguments
1. `boolean` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkCollection"></a>`_.checkCollection(collection)`
<a href="#checkCollection">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L137 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't an array or object.

#### Arguments
1. `collection` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkFunction"></a>`_.checkFunction(func)`
<a href="#checkFunction">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L152 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a function.

#### Arguments
1. `func` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkKey"></a>`_.checkKey(value)`
<a href="#checkKey">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L167 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a number/string.

#### Arguments
1. `value` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkNonEmpty"></a>`_.checkNonEmpty(value)`
<a href="#checkNonEmpty">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L182 "View in source") [&#x24C9;][1]

Throw a TypeError if value _.isEmpty

#### Arguments
1. `value` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkNumber"></a>`_.checkNumber(number)`
<a href="#checkNumber">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L197 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a number.

#### Arguments
1. `number` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkObject"></a>`_.checkObject(object)`
<a href="#checkObject">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L212 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't an object.

#### Arguments
1. `object` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkPlainObject"></a>`_.checkPlainObject(object)`
<a href="#checkPlainObject">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L227 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a plain object.

#### Arguments
1. `object` *(mixed)*: Value

* * *

<!-- /div -->

<!-- div -->

### <a id="checkString"></a>`_.checkString(string)`
<a href="#checkString">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L242 "View in source") [&#x24C9;][1]

Throw a TypeError if value isn't a string.

#### Arguments
1. `string` *(mixed)*: Value

* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“String” Methods`

<!-- div -->

### <a id="generateKey"></a>`_.generateKey(n)`
<a href="#generateKey">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L316 "View in source") [&#x24C9;][1]

Generates a random alphanumeric string with length n.

#### Arguments
1. `n` *(int)*: Desired length.

#### Example
```js
_.generateKey(5)
// => 'L7IpD'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="isNonEmptyString"></a>`_.isNonEmptyString(string)`
<a href="#isNonEmptyString">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L627 "View in source") [&#x24C9;][1]

Checks if value is a non-empty string.

#### Arguments
1. `string` *(object)*: String

#### Example
```js
_.isNonEmptyString('')
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="slugify"></a>`_.slugify(string)`
<a href="#slugify">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L830 "View in source") [&#x24C9;][1]

Generates a url-safe "slug" form of a string.

#### Arguments
1. `string` *(string)*: String value.

#### Example
```js
_.slugify('A Test')
// => a-test
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Util” Methods`

<!-- div -->

### <a id="getPrototype"></a>`_.getPrototype(value)`
<a href="#getPrototype">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L458 "View in source") [&#x24C9;][1]

Gets the prototype for the given value.

#### Arguments
1. `value` *(&#42;)*: Source value

#### Example
```js
_.getPrototype(5)
// => { toFixed: func(), ... }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="hasPrototype"></a>`_.hasPrototype(value, property)`
<a href="#hasPrototype">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L516 "View in source") [&#x24C9;][1]

Checks if a prototype exists, or `property` exists on the prototype.

#### Arguments
1. `value` *(&#42;)*: Source value
2. `property` *(string)*: Prototype property.

#### Example
```js
_.hasPrototype(null)
// => false

_.hasPrototype(5)
// => true
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Methods`

<!-- div -->

### <a id="isCollection"></a>`isCollection(collection)`
<a href="#isCollection">#</a> [&#x24C8;](https://github.com/helion3/lodash-addons/blob/master/src/lodash-addons.js#L610 "View in source") [&#x24C9;][1]

Checks if a value is either an array or an object.

#### Arguments
1. `collection` *(mixed)*: Value to check

* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #array "Jump back to the TOC."
