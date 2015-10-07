var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/colors/randomColor');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('randomColor', function() {
        it('exists', function() {
            expect(_.randomColor).to.be.a('function');
        });

        it('generates a color', function() {
            var color = _.randomColor();
            expect(color.r).to.be.a('number');
            expect(color.g).to.be.a('number');
            expect(color.b).to.be.a('number');

            expect(color.r).to.be.below(256);
            expect(color.g).to.be.below(256);
            expect(color.b).to.be.below(256);

            expect(color.r).to.be.above(0);
            expect(color.g).to.be.above(0);
            expect(color.b).to.be.above(0);
        });
    });
};
