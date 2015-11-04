var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/arrays/indexesOf');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('indexesOf', function() {
        it('exists', function() {
            expect(_.indexesOf).to.be.a('function');
        });

        var source = [true, false, true];

        it('rejects invalid array', function() {
            expect(_.indexesOf).to.throw(TypeError);
        });

        it('rejects invalid validator', function() {
            var wrapped = function() {
                _.indexesOf([]);
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('returns keys for each true element', function() {
            var keysOfTrue = _.indexesOf(source, function(val) {
                return val;
            });

            expect(keysOfTrue).to.have.length(2);
            expect(keysOfTrue[0]).to.equal(0);
            expect(keysOfTrue[1]).to.equal(2);
        });
    });
};
