var expect = require('chai').expect;

module.exports = function(_) {
    describe('changes', function() {
        it('exists', function() {
            expect(_.changes).to.be.a('function');
        });

        it('alias "changed" exists', function() {
            expect(_.changed).to.be.a('function');
        });

        it('returns empty array when given invalid arguments', function() {
            var changes = _.changes();

            expect(changes).to.be.an('array');
            expect(changes).to.have.length(0);
        });

        var arr1 = [false, false, false, false];
        var arr2 = [false, false, true];

        it('returns array of changed elements', function() {
            var changes = _.changes(arr1, arr2);

            expect(changes).to.have.length(2);
            expect(changes[0]).to.equal(2);
            expect(changes[1]).to.equal(3);
        });
    });
};
