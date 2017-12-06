const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('toBool', function() {
    it('exists', function() {
        expect(_.toBool).to.be.a('function');
    });

    it('converts values to appropriate booleans', function() {
        expect(_.toBool()).to.be.false;
        expect(_.toBool(0)).to.be.false;
        expect(_.toBool(null)).to.be.false;
        expect(_.toBool('')).to.be.false;
        expect(_.toBool({})).to.be.true;
        expect(_.toBool([])).to.be.true;
    });
});
