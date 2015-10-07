var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/strings/slugify');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('slugify', function() {
        it('exists', function() {
            expect(_.slugify).to.be.a('function');
        });
    });
};
