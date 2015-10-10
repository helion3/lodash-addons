## Lodash Addons

[![Build Status](https://travis-ci.org/helion3/lodash-addons.svg)](https://travis-ci.org/helion3/lodash-addons)

A collection of utility mixins for lodash.

#### Colors
- *lighten* - Lightens an RGB color.
- *randomColor* - Generates a color via random RGB values.

#### Numbers
- *clamp* - Clamps a number to a maximum value, or between minimum and maximum values.

#### Strings
- *isNonEmptyString* - Returns true if val is a string, and is not empty.
- *generateKey* - Generates a random string of characters.
- *lowerFirstLetter* - Lower-cases the first letter.
- *slugify* - Converts a string into a "slug", a web-safe string avoiding ugly encoding.

#### Objects
- *constant* - Creates an immutable property on an object.
- *fromQueryString* - Parses query string into key/value object.
- *hasOfType* - If has() returns true, run a validator on value.
- *isCollection* - Is value an array or object.
- *mapFiltered* - Map a function to filtered array elements.
- *omitDeep* - Run `omit` recursively down a collection.
- *recurse* - Invoke a function recursively on every element in a collection.
- *toObject* - Recursively invokes "toObject" on custom objects which support the method.
- *validatedAssign* - See explanation in `docs/`

#### Preconditions
- *checkArray* - Throw a TypeError if value isn't an array.
- *checkBoolean* - Throw a TypeError if value isn't a boolean.
- *checkCollection* - Throw a TypeError if value isn't an array or object.
- *checkFunction* - Throw a TypeError if value isn't a function.
- *checkKey* - Throw a TypeError if value isn't a number/string.
- *checkNumber* - Throw a TypeError if value isn't a number.
- *checkPlainObject* - Throw a TypeError if value isn't a plain object.
- *checkString* - Throw a TypeError if value isn't a string.
