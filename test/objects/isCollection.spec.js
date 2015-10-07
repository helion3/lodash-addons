var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/isCollection');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('isCollection', function() {
        it('exists', function() {
            expect(_.isCollection).to.be.a('function');
        });

        it('rejects invalid collections', function() {
            expect(_.isCollection()).to.be.false;
            expect(_.isCollection(5)).to.be.false;
            expect(_.isCollection('')).to.be.false;
            expect(_.isCollection(null)).to.be.false;
        });

        it('accepts valid collections', function() {
            expect(_.isCollection([])).to.be.true;
            expect(_.isCollection({})).to.be.true;
        });
    });
};
