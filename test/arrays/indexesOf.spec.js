var expect = require('chai').expect;

module.exports = function(_) {
    describe('indexesOf', function() {
        it('exists', function() {
            expect(_.indexesOf).to.be.a('function');
        });

        it('returns empty array when given invalid arguments', function() {
            var indices = _.indexesOf();

            expect(indices).to.be.an('array');
            expect(indices).to.have.length(0);
        });

        var source = [true, false, true];

        it('returns indices for elements matching predicate function', function() {
            var keysOfTrue = _.indexesOf(source, _.identity);

            expect(keysOfTrue).to.have.length(2);
            expect(keysOfTrue[0]).to.equal(0);
            expect(keysOfTrue[1]).to.equal(2);
        });

        it('returns indices for elements matching predicate value', function() {
            var keysOfTrue = _.indexesOf(source, true);

            expect(keysOfTrue).to.have.length(2);
            expect(keysOfTrue[0]).to.equal(0);
            expect(keysOfTrue[1]).to.equal(2);
        });
    });
};
