var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/strings/lowerFirstLetter');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('lowerFirstLetter', function() {
        it('exists', function() {
            expect(_.lowerFirstLetter).to.be.a('function');
        });

        it('throws error for an invalid string', function() {
            expect(_.lowerFirstLetter).to.throw(TypeError);
        });

        it('lower cases the first letter', function() {
            expect(_.lowerFirstLetter('TEST')).to.equal('tEST');
        });
    });
};
