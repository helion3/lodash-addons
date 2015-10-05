var chai = require('chai');
var expect = chai.expect;
var _ = require('../dist/lodash-addons');

describe('Colors', function() {
    describe('lighten', function() {
        var color = _.randomColor();

        it('exists', function() {
            expect(_.lighten).to.be.a('function');
        });

        it('lightens a color', function() {
            var lightened = _.lighten(color);
            expect(lightened.r).to.be.above(color.r);
            expect(lightened.g).to.be.above(color.r);
            expect(lightened.b).to.be.above(color.r);
        });

        it('lightens a color by a given value', function() {
            var lightened = _.lighten(color, 10);
            expect(lightened.r - color.r).to.equal(10);
            expect(lightened.g - color.g).to.equal(10);
            expect(lightened.b - color.b).to.equal(10);
        });
    });

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
});
