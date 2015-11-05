var expect = require('chai').expect;

module.exports = function(_) {
    describe('mapFiltered', function() {
        it('exists', function() {
            expect(_.mapFiltered).to.be.a('function');
        });

        it('applies method to each element', function() {
            var result = _.mapFiltered([1, 2, 3, 'test'], _.isNumber, function(n) {
                return n *= n;
            });

            expect(result).to.have.length(3);
            expect(result[1]).to.equal(4);
            expect(result[2]).to.equal(9);
        });
    });
};
