var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/with');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('with', function() {
        it('exists', function() {
            expect(_.with).to.be.a('function');
        });

        it('throws error for an invalid key', function() {
            expect(_.with).to.throw(TypeError);
        });

        it('returns object with desired property', function() {
            var obj = _.with('key', true);

            expect(obj).to.be.an('object');
            expect(obj.key).to.be.true;
        });

        it('returns nested objects from path', function() {
            var obj = _.with('parent.child.grandchild', true);

            expect(obj).to.be.an('object');
            expect(obj.parent.child.grandchild).to.be.true;
        });
    });
};
