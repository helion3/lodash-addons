## Lodash Addons

[![Build Status](https://travis-ci.org/helion3/lodash-addons.svg)](https://travis-ci.org/helion3/lodash-addons)

[![Dependencies](https://david-dm.org/helion3/lodash-addons.svg)](https://david-dm.org/helion3/lodash-addons)

A collection of utility mixins for lodash. Supports both CommonJS and AMD module formats
(meaning, works well in node/webpack or RequireJS-based projects).

### Installation

Node: `npm install -save lodash-addons`

Bower `bower install --save lodash-addons`

#### Colors
- *lighten* - Lightens an RGB color.
- *randomColor* - Generates a color via random RGB values.

#### Numbers
- *clamp* - Clamps a number to a maximum value, or between minimum and maximum values.

#### Strings
- *isNonEmptyString* - Returns true if val is a string, and is not empty.
- *generateKey* - Generates a random string of characters.
- *slugify* - Converts a string into a "slug", a web-safe string avoiding ugly encoding.

#### Collections

- *cage* - Clones source and wraps with `chain`. Destroys original.
- *isCollection* - Is value an array or object.

#### Objects
- *constant* - Creates an immutable property on an object.
- *finalize* - Creates a new object with constants for every property in a source object.
- *fromQueryString* - Parses query string into key/value object.
- *hasOfType* - If has() returns true, run a validator on value.
- *mapFiltered* - Map a function to filtered array elements.
- *omitDeep* - Run `omit` recursively down a collection.
- *recurse* - Invoke a function recursively on every element in a collection.
- *requestSetter* - Gives a setter for `prop` only to the first requesting caller.
- *toQueryString* - Converts an object's key/values to a query string.
- *toObject* - Recursively invokes "toObject" on custom objects which support the method.
- *validatedAssign* - See explanation in `docs/`
- *with* - Shorthand object creation when sole property is a variable, or a path.

#### Preconditions
- *check* - Throw a TypeError if value doesn't match one of any provided validation methods.
- *checkArray* - Throw a TypeError if value isn't an array.
- *checkBoolean* - Throw a TypeError if value isn't a boolean.
- *checkCollection* - Throw a TypeError if value isn't an array or object.
- *checkFunction* - Throw a TypeError if value isn't a function.
- *checkKey* - Throw a TypeError if value isn't a number/string.
- *checkNonEmpty* - Throw a TypeError if value isEmpty
- *checkNumber* - Throw a TypeError if value isn't a number.
- *checkPlainObject* - Throw a TypeError if value isn't a plain object.
- *checkString* - Throw a TypeError if value isn't a string.

#### Cages

- *getArray* - Returns value if a array, otherwise a default array.
- *getBoolean* - Returns value if a boolean, otherwise a default boolean.
- *getNumber* - Returns value if a number, otherwise a default number.
- *getString* - Returns value if a string, otherwise a default string.

#### Utils
- *getPrototype* - Returns the prototype for the given object.
- *hasPrototype* - Returns whether or not a prototype exists or a given property exists on the prototype.
- *hasPrototypeOfType* - Returns whether an object has a prototype property of the given type.
- *toBool* - Converts a value to a boolean to work properly within explicit comparisons.
