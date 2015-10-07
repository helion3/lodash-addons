var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/hasOfType');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('hasOfType', function() {
        it('exists', function() {
            expect(_.hasOfType).to.be.a('function');
        });

        it('rejects invalid collection', function() {
            expect(_.hasOfType).to.throw.TypeError;
        });

        it('rejects invalid prop', function() {
            var wrapped = function() {
                _.hasOfType({});
            };

            expect(wrapped).to.throw.TypeError;
        });

        it('rejects invalid validator', function() {
            var wrapped = function() {
                _.hasOfType({}, 'test');
            };

            expect(wrapped).to.throw.TypeError;
        });

        it('returns false due to missing property', function() {
            expect(_.hasOfType({}, 'test', _.isString)).to.be.false;
        });

        it('returns false due to property of wrong type', function() {
            expect(_.hasOfType({ test: 5 }, 'test', _.isString)).to.be.false;
        });

        it('returns true due to valid property', function() {
            expect(_.hasOfType({ test: '' }, 'test', _.isString)).to.be.true;
        });

        it('returns true due to valid array key', function() {
            expect(_.hasOfType([''], 0, _.isString)).to.be.true;
        });
    });
};
