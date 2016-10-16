var expect = require('chai').expect;

module.exports = function(_) {
    describe('sign', function() {
        it('exists', function() {
            expect(_.sign).to.be.a('function');
        });

        it('returns positive for any positive number', function() {
            expect(_.sign(0)).to.equal(1);
            expect(_.sign(1000)).to.equal(1);
        });

        it('returns negative for any negative number', function() {
            expect(_.sign(-1)).to.equal(-1);
            expect(_.sign(-1000)).to.equal(-1);
        });
    });
};
