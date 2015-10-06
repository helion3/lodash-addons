## Lodash Addons

[![Build Status](https://travis-ci.org/helion3/lodash-addons.svg)](https://travis-ci.org/helion3/lodash-addons)

A collection of utility mixins for lodash.

#### Numbers
- *clamp* - Clamps a number to a maximum value, or between minimum and maximum values.

#### Strings
- *isNonEmptyString* - Returns true if val is a string, and is not empty.
- *generateKey* - Generates a random string of characters.
- *lowerFirstLetter* - Lower-cases the first letter.
- *slugify* - Converts a string into a "slug", a web-safe string avoiding ugly encoding.

#### Objects
- *hasOfType* - If has() returns true, run a validator on value.
- *isCollection* - Is value an array or object.
- *omitDeep* - Run `omit` recursively down a collection.
- *validatedAssign* - See explanation in `docs/`
