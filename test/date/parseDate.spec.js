const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('parseDate', function() {
    it('exists', function() {
        expect(_.parseDate).to.be.a('function');
        expect(_.toDate).to.be.a('function');
    });

    it('returns a date', function() {
        expect(_.isDate(_.parseDate(0))).to.be.true;
    });

    it('returns the correct date', function() {
        const date = _.parseDate('2018-01-01T00:00:00.000Z');

        expect(date.toISOString()).to.equal('2018-01-01T00:00:00.000Z');
    });
});
