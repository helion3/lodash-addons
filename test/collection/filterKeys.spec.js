const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('filterKeys', function() {
    it('exists', function() {
        expect(_.filterKeys).to.be.a('function');
    });

    it('filters object keys with truthy values', function() {
        const keys = _.filterKeys({ a: true, b: true, c: false }, function(val) {
            return val;
        });

        expect(keys).to.have.length(2);
        expect(keys[0]).to.equal('a');
        expect(keys[1]).to.equal('b');
    });

    it('filters array keys with truthy values', function() {
        const keys = _.filterKeys([true, true, false, true], function(val) {
            return val;
        });

        expect(keys).to.have.length(3);
        expect(keys[0]).to.equal(0);
        expect(keys[1]).to.equal(1);
        expect(keys[2]).to.equal(3);
    });
});
