const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('isIterable', function() {
    it('exists', function() {
        expect(_.isIterable).to.be.a('function');
    });

    it('returns true for an array', function() {
        expect(_.isIterable([])).to.be.true;
    });

    it('returns false for a string', function() {
        expect(_.isIterable('')).to.be.false;
    });

    it('returns false for an object', function() {
        expect(_.isIterable({})).to.be.false;
    });
});
