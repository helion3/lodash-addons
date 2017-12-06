const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('toQueryString', function() {
    it('exists', function() {
        expect(_.toQueryString).to.be.a('function');
    });

    it('returns key/value object from single segment query', function() {
        const result = _.toQueryString({
            key: 'value'
        });

        expect(result).to.equal('key=value');
    });

    it('encodes values correctly', function() {
        const obj = {
            key: 'test&'
        };

        expect(_.toQueryString(obj)).to.equal('key=test%26');
    });
});
