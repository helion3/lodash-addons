var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/arrays/changed');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('changed', function() {
        it('exists', function() {
            expect(_.changed).to.be.a('function');
        });

        var arr1 = [false, false, false, false];
        var arr2 = [false, false, true];

        it('rejects invalid array #1', function() {
            expect(_.changed).to.throw(TypeError);
        });

        it('rejects invalid array #2', function() {
            var wrapped = function() {
                _.changed([]);
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('returns array of changed elements', function() {
            var changed = _.changed(arr1, arr2);

            expect(changed).to.have.length(2);
            expect(changed[0]).to.equal(2);
            expect(changed[1]).to.equal(3);
        });
    });
};
