const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('differenceKeys', function() {
    it('exists', function() {
        expect(_.differenceKeys).to.be.a('function');
    });

    it('returns empty array when given invalid arguments', function() {
        const changes = _.differenceKeys();

        expect(changes).to.be.an('array');
        expect(changes).to.have.length(0);
    });

    const arr1 = [false, false, false, false];
    const arr2 = [false, false, true];

    it('returns array of keys with unequal values', function() {
        const changes = _.differenceKeys(arr1, arr2);

        expect(changes).to.have.length(2);
        expect(changes[0]).to.equal(2);
        expect(changes[1]).to.equal(3);
    });
});
