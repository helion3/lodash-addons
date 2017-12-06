const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('isNonEmptyString', function() {
    it('exists', function() {
        expect(_.isNonEmptyString).to.be.a('function');
    });

    it('rejects non-string values', function() {
        expect(_.isNonEmptyString()).to.be.false;
        expect(_.isNonEmptyString(0)).to.be.false;
        expect(_.isNonEmptyString([])).to.be.false;
        expect(_.isNonEmptyString({})).to.be.false;
        expect(_.isNonEmptyString(null)).to.be.false;
    });

    it('rejects empty string value', function() {
        expect(_.isNonEmptyString('')).to.be.false;
    });

    it('rejects whitespace-only string value', function() {
        expect(_.isNonEmptyString(' ')).to.be.false;
    });

    it('accepts non-empty string', function() {
        expect(_.isNonEmptyString('test')).to.be.true;
    });
});
