var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/utils/hasPrototypeOfType');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('hasPrototypeOfType', function() {
        it('exists', function() {
            expect(_.hasPrototypeOfType).to.be.a('function');
        });

        it('throws error for invalid property', function() {
            var wrapped = function() {
                _.hasPrototypeOfType(1, '', _.isFunction);
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('throws error for invalid validator', function() {
            var wrapped = function() {
                _.hasPrototypeOfType(1, 'test');
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('returns true for valid function', function() {
            expect(_.hasPrototypeOfType(1, 'toFixed', _.isFunction)).to.be.true;
        });

        it('returns true for an invalid function', function() {
            expect(_.hasPrototypeOfType(1, 'fake', _.isFunction)).to.be.false;
        });
    });
};
