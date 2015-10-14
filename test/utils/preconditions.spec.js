var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/utils/preconditions');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('check', function() {
        it('exists', function() {
            expect(_.check).to.be.a('function');
        });

        it('rejects invalid and missing validator func', function() {
            var wrapped = function() {
                _.check(0, 0);
            };

            expect(_.check).to.throw.TypeError;
            expect(wrapped).to.throw.TypeError;
        });

        it('throws error using a single validator', function() {
            var wrapped = function() {
                _.check(0, _.isBoolean);
            };

            expect(wrapped).to.throw.TypeError;
        });

        it('validates using a single validator', function() {
            var wrapped = function() {
                _.check(0, _.isNumber);
            };

            expect(wrapped).to.not.throw.TypeError;
        });

        it('validates using multiple validators', function() {
            var wrapped = function() {
                _.check({}, _.isArray, _.isObject);
            };

            expect(wrapped).to.not.throw.TypeError;
        });
    });
};
