var expect = require('chai').expect;

module.exports = function(_) {
    describe('filterKeys', function() {
        it('exists', function() {
            expect(_.filterKeys).to.be.a('function');
        });

        it('filters keys with truthy values', function() {
            var keys = _.filterKeys({ a: true, b: true, c: false }, function(val) {
                return val;
            });

            expect(keys).to.have.length(2);
            expect(keys[0]).to.equal('a');
            expect(keys[1]).to.equal('b');
        });
    });
};
