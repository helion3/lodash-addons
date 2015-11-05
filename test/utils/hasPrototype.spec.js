var expect = require('chai').expect;

module.exports = function(_) {
    describe('hasPrototype', function() {
        it('exists', function() {
            expect(_.hasPrototype).to.be.a('function');
        });

        it('returns true for values with a prototype', function() {
            expect(_.hasPrototype(1)).to.be.true;
            expect(_.hasPrototype('')).to.be.true;
        });

        it('returns false for values without a prototype', function() {
            expect(_.hasPrototype(null)).to.be.false;
            expect(_.hasPrototype(undefined)).to.be.false;
            expect(_.hasPrototype(undefined, 'fake')).to.be.false;
        });

        it('returns true for values with a specific prototype method', function() {
            expect(_.hasPrototype(1, 'toFixed')).to.be.true;
            expect(_.hasPrototype('', 'concat')).to.be.true;
        });

        it('returns false for values without a specific prototype method', function() {
            expect(_.hasPrototype(1, 'fake')).to.be.false;
            expect(_.hasPrototype('', 'fake')).to.be.false;
        });

        it('returns true for values with a specific parent prototype method', function() {
            expect(_.hasPrototype(1, 'hasOwnProperty')).to.be.true;
        });
    });
};
