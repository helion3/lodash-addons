var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/cage');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('cage', function() {
        it('exists', function() {
            expect(_.cage).to.be.a('function');
        });

        var sourceObj = {
            validNumber: 1,
            invalidNumber: false,
            validStr: 'test',
            invalidStr: false
        };

        var caged;

        it('aliases chain', function() {
            caged = _.cage(sourceObj);
            expect(caged.__chain__).to.be.true;
        });

        it('cloned and destroyed object source', function() {
            expect(_.keys(sourceObj)).to.have.length(0);
        });

        it('clones and destroys array source', function() {
            var sourceArr = [1, 2];
            var cagedArr = _.cage(sourceArr);
            expect(sourceArr).to.have.length(0);
            expect(cagedArr.get(0).getNumber().value()).to.equal(1);
            expect(cagedArr.get(1).getNumber().value()).to.equal(2);
        });
    });
};
