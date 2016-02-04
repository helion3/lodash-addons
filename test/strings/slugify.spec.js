var expect = require('chai').expect;

module.exports = function(_) {
    describe('slugify', function() {
        it('exists', function() {
            expect(_.slugify).to.be.a('function');
        });

        it('converts invalid types to strings', function() {
            expect(_.slugify(5)).to.equal('5');
            expect(_.slugify(undefined)).to.equal('');
        });

        it('removes illegal characters', function() {
            expect(_.slugify('test?ing')).to.equal('testing');
        });

        it('removes consecutive illegal characters', function() {
            expect(_.slugify('test??ing')).to.equal('testing');
        });

        it('replaces whitespace', function() {
            expect(_.slugify('test ing')).to.equal('test-ing');
        });
    });
};
