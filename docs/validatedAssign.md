# _.validateAssign

Validates a source object's properties against a defined model. If the validation passes, the property is accepted, otherwise a default value will be used.

You may define a specific validation method (lodash or custom), or the script can infer the type from the source.

    // First, we define a model for an object that has a name property. It must be a string and if the validator fails, the default value is used instead.
    var model = {
      name: {
        validator: _.isString,
        default: false
      }
    }

    var userObject = {
      name: 'Kermit'
    }

    var result = _.validateAssign(model, userObject);
    // returns { name: 'Kermit' } because validation passed

This allows you to merge user configuration properties, JSON response properties, etc - while rejecting any that are of an invalid type.

You may use lodash `_.isXXXX` methods, or provide your own custom validator.

For example, a way to validate a `typeof string` as well as it being non-empty:

    var model = {
        name: {
            validator: function(val) {
                return _.isString(val) && val.trim() !== '';
            },
            default: false
        }
    };

**Note:** We also provide a convenience method for checking non-empty strings: `_.isNonEmptyString`


If you do not describe a model, the type will be infered from the value, and it will also be used as the default.

    var model = {
      name: 1 // infers required type as integer
    }

    var userObject = {
      name: 'Kermit'
    }

    var result = _.validateAssign(model, userObject);
    // returns { name: 1 } because validation failed
