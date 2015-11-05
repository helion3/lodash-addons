var expect = require('chai').expect;

module.exports = function(_) {
    describe('hasPrototypeOfType', function() {
        it('exists', function() {
            expect(_.hasPrototypeOfType).to.be.a('function');
        });

        it('returns false for invalid prototype', function() {
            expect(_.hasPrototypeOfType(undefined, 'toFixed', _.isFunction)).to.be.false;
        });

        it('returns true for valid function', function() {
            expect(_.hasPrototypeOfType(1, 'toFixed', _.isFunction)).to.be.true;
        });

        it('returns true for an invalid function', function() {
            expect(_.hasPrototypeOfType(1, 'fake', _.isFunction)).to.be.false;
        });
    });
};
