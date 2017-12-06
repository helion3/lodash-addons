const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('parseQueryString', function() {
    it('exists', function() {
        expect(_.parseQueryString).to.be.a('function');
        expect(_.fromQueryString).to.be.a('function');
    });

    it('returns key/value object from single segment query', function() {
        const result = _.parseQueryString('key1=value');

        expect(result).to.be.an('object');
        expect(result.key1).to.equal('value');
    });

    it('returns key/value object from query string', function() {
        const result = _.parseQueryString('key1=value&key2=value2');

        expect(result).to.be.an('object');
        expect(result.key1).to.equal('value');
        expect(result.key2).to.equal('value2');
    });

    it('returns key/value object from encoded query string', function() {
        const result = _.parseQueryString('key1=test%26');

        expect(result).to.be.an('object');
        expect(result.key1).to.equal('test&');
    });
});
