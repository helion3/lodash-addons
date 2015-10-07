var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/numbers/clamp');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('clamp', function() {
        it('exists', function() {
            expect(_.clamp).to.be.a('function');
        });

        it('throws error for an invalid value object', function() {
            expect(_.clamp).to.throw(TypeError);
        });

        it('throws error for an invalid maximum value object', function() {
            var wrappedFunction = function() {
                _.clamp(1);
            };

            expect(wrappedFunction).to.throw(TypeError);
        });

        it('clamps to a max value', function() {
            expect(_.clamp(5, 3)).to.equal(3);
        });

        it('allows any minimum value when none defined', function() {
            expect(_.clamp(0, 3)).to.equal(0);
        });

        it('clamps to a min value', function() {
            expect(_.clamp(0, 1, 3)).to.equal(1);
        });

        it('returns value in safe range', function() {
            expect(_.clamp(2, 1, 3)).to.equal(2);
        });
    });
};
