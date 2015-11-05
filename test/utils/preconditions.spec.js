var expect = require('chai').expect;

module.exports = function(_) {
    describe('check', function() {
        it('exists', function() {
            expect(_.check).to.be.a('function');
        });

        it('does not throw error when missing validator', function() {
            var wrapped = function() {
                _.check(0, 0);
            };

            expect(_.check).to.not.throw(TypeError);
            expect(wrapped).to.not.throw(TypeError);
        });

        it('throws error using a single validator', function() {
            var wrapped = function() {
                _.check(0, _.isBoolean);
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('validates using a single validator', function() {
            var wrapped = function() {
                _.check(0, _.isNumber);
            };

            expect(wrapped).to.not.throw(TypeError);
        });

        it('validates using multiple validators', function() {
            var wrapped = function() {
                _.check({}, _.isArray, _.isObject);
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkArray', function() {
        it('exists', function() {
            expect(_.checkArray).to.be.a('function');
        });

        it('rejects invalid array', function() {
            expect(_.checkArray).to.throw(TypeError);
        });

        it('accepts array', function() {
            var wrapped = function() {
                _.checkArray([]);
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkBoolean', function() {
        it('exists', function() {
            expect(_.checkBoolean).to.be.a('function');
        });

        it('rejects invalid boolean', function() {
            expect(_.checkBoolean).to.throw(TypeError);
        });

        it('accepts boolean', function() {
            var wrapped = function() {
                _.checkBoolean(false);
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkCollection', function() {
        it('exists', function() {
            expect(_.checkCollection).to.be.a('function');
        });

        it('rejects invalid collection', function() {
            expect(_.checkCollection).to.throw(TypeError);
        });

        it('accepts array', function() {
            var wrapped = function() {
                _.checkCollection([]);
            };

            expect(wrapped).to.not.throw(TypeError);
        });

        it('accepts object', function() {
            var wrapped = function() {
                _.checkCollection({});
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkFunction', function() {
        it('exists', function() {
            expect(_.checkFunction).to.be.a('function');
        });

        it('rejects invalid function', function() {
            expect(_.checkFunction).to.throw(TypeError);
        });

        it('accepts function', function() {
            var wrapped = function() {
                _.checkFunction(function() {});
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkKey', function() {
        it('exists', function() {
            expect(_.checkKey).to.be.a('function');
        });

        it('rejects invalid key', function() {
            expect(_.checkKey).to.throw(TypeError);
        });

        it('accepts string key', function() {
            var wrapped = function() {
                _.checkKey('');
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('accepts string key', function() {
            var wrapped = function() {
                _.checkKey('test');
            };

            expect(wrapped).to.not.throw(TypeError);
        });

        it('accepts numeric key', function() {
            var wrapped = function() {
                _.checkKey(0);
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkNonEmpty', function() {
        it('exists', function() {
            expect(_.checkNonEmpty).to.be.a('function');
        });

        it('rejects zero', function() {
            var wrapper = function() {
                _.checkNonEmpty(0);
            };

            expect(wrapper).to.throw(TypeError);
        });

        it('rejects empty string', function() {
            var wrapper = function() {
                _.checkNonEmpty('');
            };

            expect(wrapper).to.throw(TypeError);
        });

        it('rejects empty array', function() {
            var wrapper = function() {
                _.checkNonEmpty([]);
            };

            expect(wrapper).to.throw(TypeError);
        });

        it('accepts non-empty string', function() {
            var wrapper = function() {
                _.checkNonEmpty('test');
            };

            expect(wrapper).to.not.throw(TypeError);
        });
    });

    describe('checkNumber', function() {
        it('exists', function() {
            expect(_.checkNumber).to.be.a('function');
        });

        it('rejects invalid number', function() {
            expect(_.checkNumber).to.throw(TypeError);
        });

        it('accepts number', function() {
            var wrapped = function() {
                _.checkNumber(5);
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkObject', function() {
        it('exists', function() {
            expect(_.checkObject).to.be.a('function');
        });

        it('rejects invalid object', function() {
            expect(_.checkObject).to.throw(TypeError);
        });

        it('accepts object', function() {
            var wrapped = function() {
                _.checkObject(new Array(1));
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkPlainObject', function() {
        it('exists', function() {
            expect(_.checkPlainObject).to.be.a('function');
        });

        it('rejects invalid object', function() {
            expect(_.checkPlainObject).to.throw(TypeError);
        });

        it('accepts plain object', function() {
            var wrapped = function() {
                _.checkPlainObject({});
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });

    describe('checkString', function() {
        it('exists', function() {
            expect(_.checkString).to.be.a('function');
        });

        it('rejects invalid string', function() {
            expect(_.checkString).to.throw(TypeError);
        });

        it('accepts string', function() {
            var wrapped = function() {
                _.checkString('');
            };

            expect(wrapped).to.not.throw(TypeError);
        });
    });
};
