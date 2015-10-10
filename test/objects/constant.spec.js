var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/constant');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('constant', function() {
        it('exists', function() {
            expect(_.constant).to.be.a('function');
        });

        var obj;

        it('returns object with desired property', function() {
            obj = _.constant({}, 'TEST', true);

            expect(obj).to.be.an('object');
            expect(obj.TEST).to.be.true;
        });

        it('property is immutable', function() {
            obj.TEST = false;
            expect(obj.TEST).to.be.true;

            var desc = Object.getOwnPropertyDescriptor(obj, 'TEST');
            expect(desc.writable).to.be.false;
            expect(desc.enumerable).to.be.false;
            expect(desc.configurable).to.be.false;
        });
    });
};
