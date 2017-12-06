# Changelog

# 2.0.0

- Added `filterKeys`.
- Added `isIterable`.
- `check` now throws an error when given no validator.
- Renamed `changed` and `changes` to `differenceKeys`.
- Replaced `indexesOf` with `filterKeys`.
- Removed all `check____` variations. Use `_.check` with required `_.is___` type functions.
- Removed `exceptKeys`.
- Removed `hasPrototypeOfType`. Use `hasInOfType`.
- Removed `immutable`. Recommended alternative: https://facebook.github.io/immutable-js/
- Removed `isCollection`.
- Removed `mapFiltered`. Use `_(array).filter(predicate).map(iteratee).value()`.
- Removed `mixInto`. Use `_.assign` with `_.getPrototype`s.
- Removed `omitDeep`.
- Removed `recurse`.
- Removed `requestSetter`.
- Removed `toObject`.
- Removed `validatedAssign`. Recommended alternative: https://www.npmjs.com/package/joi
- Dropped Bower support.

# v1.2.0

- Fixes incorrect deploy of v1.1.

# v1.1.0

- Added `parseDate`, and an alias `toDate`.
- Added `transformValueMap`.
