var expect = require('chai').expect;

module.exports = function(_) {
    describe('clamp', function() {
        it('exists', function() {
            expect(_.clamp).to.be.a('function');
        });

        it('returns 0 for invalid arguments', function() {
            expect(_.clamp()).to.equal(0);
        });

        it('returns custom minimum for invalid number', function() {
            expect(_.clamp(false, 1, 5)).to.equal(1);
        });

        it('clamps to a max value', function() {
            expect(_.clamp(5, 3)).to.equal(3);
        });

        it('allows any minimum value when none defined', function() {
            expect(_.clamp(0, 3)).to.equal(0);
        });

        it('clamps to a min value', function() {
            expect(_.clamp(0, 1, 3)).to.equal(1);
        });

        it('returns value in safe range', function() {
            expect(_.clamp(2, 1, 3)).to.equal(2);
        });
    });
};
