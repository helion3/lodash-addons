var expect = require('chai').expect;

module.exports = function(_) {
    describe('exceptKeys', function() {
        it('exists', function() {
            expect(_.exceptKeys).to.be.a('function');
        });

        it('accepts invalid arguments', function() {
            expect(_.exceptKeys()).to.be.an('array');
        });

        var arr = [1, 2, 3];

        it('iterates array except given keys', function() {
            var iteratedKeys = [];

            _.exceptKeys(arr, [1], function(value, key) {
                iteratedKeys.push(key);
            });

            expect(iteratedKeys).to.have.length(2);
            expect(iteratedKeys[0]).to.equal(0);
            expect(iteratedKeys[1]).to.equal(2);
        });
    });
};
