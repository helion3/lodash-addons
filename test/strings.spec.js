var chai = require('chai');
var expect = chai.expect;
var _ = require('../dist/lodash-addons');

describe('Strings', function() {
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

    describe('lowerFirstLetter', function() {
        it('exists', function() {
            expect(_.lowerFirstLetter).to.be.a('function');
        });

        it('throws error for an invalid string', function() {
            expect(_.lowerFirstLetter).to.throw(TypeError);
        });

        it('lower cases the first letter', function() {
            expect(_.lowerFirstLetter('TEST')).to.equal('tEST');
        });
    });

    describe('slugify', function() {
        it('exists', function() {
            expect(_.slugify).to.be.a('function');
        });
    });
});
