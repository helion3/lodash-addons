var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/toQueryString');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('toQueryString', function() {
        it('exists', function() {
            expect(_.toQueryString).to.be.a('function');
        });

        it('throws error for an invalid object', function() {
            expect(_.toQueryString).to.throw(TypeError);
        });

        it('returns key/value object from single segment query', function() {
            var result = _.toQueryString({
                key: 'value'
            });

            expect(result).to.equal('key=value');
        });

        it('encodes values correctly', function() {
            var obj = {
                key: 'test&'
            };

            expect(_.toQueryString(obj)).to.equal('key=test%26');
        });
    });
};
