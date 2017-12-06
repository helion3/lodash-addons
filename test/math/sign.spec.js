const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('sign', function() {
    it('exists', function() {
        expect(_.sign).to.be.a('function');
    });

    it('returns +0 for +0', function() {
        expect(_.sign(0)).to.equal(0);
        expect(_.sign(+0)).to.equal(0);
    });

    it('returns positive for numbers >= 1', function() {
        expect(_.sign(1)).to.equal(1);
        expect(_.sign(1000)).to.equal(1);
    });

    it('returns -0 for -0', function() {
        expect(_.sign(-0)).to.equal(-0);
    });

    it('returns negative for numbers <= -1', function() {
        expect(_.sign(-1)).to.equal(-1);
        expect(_.sign(-1000)).to.equal(-1);
    });

    it('returns NaN for non-numbers', function() {
        expect(isNaN(_.sign(false))).to.be.true;
    });
});
