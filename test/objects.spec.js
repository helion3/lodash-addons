var chai = require('chai');
var expect = chai.expect;
var _ = require('../dist/lodash-addons');

describe('Objects', function() {
    describe('isCollection', function() {
        it('exists', function() {
            expect(_.isCollection).to.be.a('function');
        });

        it('rejects invalid collections', function() {
            expect(_.isCollection()).to.be.false;
            expect(_.isCollection(5)).to.be.false;
            expect(_.isCollection('')).to.be.false;
            expect(_.isCollection(null)).to.be.false;
        });

        it('accepts valid collections', function() {
            expect(_.isCollection([])).to.be.true;
            expect(_.isCollection({})).to.be.true;
        });
    });

    describe('omitDeep', function() {
        var obj = {
            valid: '',
            invalid: '',
            child: {
                valid: '',
                invalid: '',
                child: {
                    valid: '',
                    invalid: ''
                }
            }
        };

        it('exists', function() {
            expect(_.omitDeep).to.be.a('function');
        });

        it('rejects invalid collection', function() {
            expect(_.omitDeep).to.throw.TypeError;
        });

        var parsed = _.omitDeep(obj, ['invalid']);

        it('removes root level key', function() {
            expect(_.has(parsed, 'valid')).to.be.true;
            expect(_.has(parsed, 'invalid')).to.be.false;
        });

        it('removes second tier key', function() {
            expect(_.has(parsed.child, 'valid')).to.be.true;
            expect(_.has(parsed.child, 'invalid')).to.be.false;
        });

        it('removes third tier key', function() {
            expect(_.has(parsed.child.child, 'valid')).to.be.true;
            expect(_.has(parsed.child.child, 'invalid')).to.be.false;
        });
    });

    describe('validatedAssign', function() {
        it('exists', function() {
            expect(_.validatedAssign).to.be.a('function');
        });

        it('rejects invalid model', function() {
            expect(_.validatedAssign).to.throw.Error;
        });

        it('rejects invalid source', function() {
            expect(_.validatedAssign).to.throw.Error;
        });

        it('rejects invalid array', function() {
            var model = {
                test: {
                    validator: _.isArray,
                    default: false
                }
            };

            var source = {
                test: ''
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(false);
        });

        it('accepts valid array', function() {
            var model = {
                test: {
                    validator: _.isArray,
                    default: false
                }
            };

            var source = {
                test: [1, 2]
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.be.a('array');
            expect(result.test.length).to.equal(2);
        });

        it('rejects invalid boolean', function() {
            var model = {
                test: {
                    validator: _.isBoolean,
                    default: false
                }
            };

            var source = {
                test: ''
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(false);
        });

        it('accepts valid boolean', function() {
            var model = {
                test: {
                    validator: _.isBoolean,
                    default: false
                }
            };

            var source = {
                test: true
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(true);
        });

        it('rejects invalid function', function() {
            var model = {
                test: {
                    validator: _.isFunction,
                    default: null
                }
            };

            var source = {
                test: ''
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(null);
        });

        it('accepts valid function', function() {
            var model = {
                test: {
                    validator: _.isFunction,
                    default: false
                }
            };

            var source = {
                test: function() {}
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.be.a('function');
        });

        it('rejects invalid numbers', function() {
            var model = {
                test: {
                    validator: _.isNumber,
                    default: 1
                }
            };

            var source = {
                test: false
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(1);
        });

        it('accepts valid numbers', function() {
            var model = {
                test: {
                    validator: _.isNumber,
                    default: 1
                }
            };

            var source = {
                test: 2
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(2);
        });

        it('rejects invalid regexp', function() {
            var model = {
                test: {
                    validator: _.isRegExp,
                    default: false
                }
            };

            var source = {
                test: ''
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(false);
        });

        it('accepts valid regexp', function() {
            var model = {
                test: {
                    validator: _.isRegExp,
                    default: false
                }
            };

            var source = {
                test: /0-9/
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.be.an.instanceof(RegExp);
        });

        it('rejects invalid non-empty string', function() {
            var model = {
                test: {
                    validator: _.isNonEmptyString,
                    default: 'Test'
                }
            };

            var source = {
                test: ''
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal('Test');
        });

        it('accepts valid non-empty string', function() {
            var model = {
                test: {
                    validator: _.isNonEmptyString,
                    default: 'Test'
                }
            };

            var source = {
                test: 'it worked'
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal('it worked');
        });

        it('rejects non-boolean', function() {
            var model = {
                test: false
            };

            var source = {
                test: ''
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(false);
        });

        it('accepts boolean', function() {
            var model = {
                test: false
            };

            var source = {
                test: true
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(true);
        });

        it('rejects non-function', function() {
            var model = {
                test: function() {}
            };

            var source = {
                test: null
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.be.a('function');
        });

        it('accepts function', function() {
            var model = {
                test: function() {}
            };

            var source = {
                test: function() {}
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.be.a('function');
        });

        it('rejects empty strings', function() {
            var model = {
                test: {
                    validator: function(val) {
                        return _.isString(val) && val.trim() !== '';
                    },
                    default: false
                }
            };

            var source = {
                test: ''
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal(false);
        });

        it('accepts non-empty strings', function() {
            var model = {
                test: {
                    validator: function(val) {
                        return _.isString(val) && val.trim() !== '';
                    },
                    default: false
                }
            };

            var source = {
                test: 'test'
            };

            var result = _.validatedAssign(model, source);

            expect(result.test).to.equal('test');
        });

        it('validates second tier object', function() {
            var model = {
                planets: {
                    venus: {
                        validator: _.isNonEmptyString,
                        default: false
                    },
                    jupiter: {
                        validator: _.isNonEmptyString,
                        default: false
                    }
                }
            };

            var source = {
                planets: {
                    venus: '',
                    jupiter: 'seen'
                }
            };

            var result = _.validatedAssign(model, source);

            expect(result.planets).to.be.a('object');
            expect(result.planets.venus).to.equal(false);
            expect(result.planets.jupiter).to.equal('seen');
        });

        it('validates third tier object', function() {
            var model = {
                planetCount: 8,
                planets: {
                    jupiter: {
                        direction: {
                            validator: function(val) {
                                return ['south', 'west', 'east', 'north'].indexOf(val) >= 0;
                            }
                        },
                        default: false
                    }
                }
            };

            var source = {
                planetCount: 8,
                planets: {
                    jupiter: {
                        direction: 'south'
                    }
                }
            };

            var result = _.validatedAssign(model, source);

            expect(result.planets).to.be.a('object');
            expect(result.planetCount).to.equal(8);
            expect(result.planets.jupiter).to.be.a('object');
            expect(result.planets.jupiter.direction).to.equal('south');
        });

        it('rejects properties not in model', function() {
            var model = {
                valid: true
            };

            var source = {
                invalid: true
            };

            var result = _.validatedAssign(model, source, true);

            expect(result.invalid).to.be.undefined;
            expect(result.valid).to.equal(true);
        });

        it('rejects properties not in model by default', function() {
            var model = {
                valid: true
            };

            var source = {
                invalid: true
            };

            var result = _.validatedAssign(model, source);

            expect(result.invalid).to.be.undefined;
            expect(result.valid).to.equal(true);
        });

        it('allows properties not in model', function() {
            var model = {
                valid: true
            };

            var source = {
                invalid: true
            };

            var result = _.validatedAssign(model, source, false);

            expect(result.invalid).to.equal(true);
            expect(result.valid).to.equal(true);
        });
    });
});
