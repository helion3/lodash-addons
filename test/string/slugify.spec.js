const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

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
