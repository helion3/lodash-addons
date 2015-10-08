var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/strings/generateKey');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('generateKey', function() {
        it('exists', function() {
            expect(_.generateKey).to.be.a('function');
        });

        it('generates 16 character key', function() {
            expect(_.generateKey()).to.have.length(16);
        });

        it('generates 32 character key', function() {
            expect(_.generateKey(32)).to.have.length(32);
        });
    });
};
