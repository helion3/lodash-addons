var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/colors/lighten');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('lighten', function() {
        var color = {
            r: 200,
            g: 200,
            b: 200
        };

        it('exists', function() {
            expect(_.lighten).to.be.a('function');
        });

        it('lightens a color', function() {
            var lightened = _.lighten(color);
            expect(lightened.r).to.be.above(color.r);
            expect(lightened.g).to.be.above(color.g);
            expect(lightened.b).to.be.above(color.b);
        });

        it('lightens a color by a given value', function() {
            var lightened = _.lighten(color, 10);
            expect(lightened.r - color.r).to.equal(10);
            expect(lightened.g - color.g).to.equal(10);
            expect(lightened.b - color.b).to.equal(10);
        });
    });
};
