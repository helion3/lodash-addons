var expect = require('chai').expect;

module.exports = function(_) {
    describe('toQueryString', function() {
        it('exists', function() {
            expect(_.toQueryString).to.be.a('function');
        });

        it('returns key/value object from single segment query', function() {
            var result = _.toQueryString({
                key: 'value'
            });

            expect(result).to.equal('key=value');
        });

        it('encodes values correctly', function() {
            var obj = {
                key: 'test&'
            };

            expect(_.toQueryString(obj)).to.equal('key=test%26');
        });
    });
};
