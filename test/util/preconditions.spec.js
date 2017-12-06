const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('check', function() {
    it('exists', function() {
        expect(_.check).to.be.a('function');
    });

    it('throws an error when missing validator', function() {
        const wrapped = function() {
            _.check(0, 0);
        };

        expect(_.check).to.throw(TypeError);
        expect(wrapped).to.throw(TypeError);
    });

    it('throws error using a single validator', function() {
        const wrapped = function() {
            _.check(0, _.isBoolean);
        };

        expect(wrapped).to.throw(TypeError);
    });

    it('validates using a single validator', function() {
        const wrapped = function() {
            _.check(0, _.isNumber);
        };

        expect(wrapped).to.not.throw(TypeError);
    });

    it('validates using multiple validators', function() {
        const wrapped = function() {
            _.check({}, _.isArray, _.isObject);
        };

        expect(wrapped).to.not.throw(TypeError);
    });
});
