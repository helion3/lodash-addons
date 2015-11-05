var expect = require('chai').expect;

module.exports = function(_) {
    describe('fromQueryString', function() {
        it('exists', function() {
            expect(_.fromQueryString).to.be.a('function');
        });

        it('returns key/value object from single segment query', function() {
            var result = _.fromQueryString('key1=value');

            expect(result).to.be.an('object');
            expect(result.key1).to.equal('value');
        });

        it('returns key/value object from query string', function() {
            var result = _.fromQueryString('key1=value&key2=value2');

            expect(result).to.be.an('object');
            expect(result.key1).to.equal('value');
            expect(result.key2).to.equal('value2');
        });

        it('returns key/value object from encoded query string', function() {
            var result = _.fromQueryString('key1=test%26');

            expect(result).to.be.an('object');
            expect(result.key1).to.equal('test&');
        });
    });
};
