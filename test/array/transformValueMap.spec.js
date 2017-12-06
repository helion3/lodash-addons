const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('transformValueMap', function() {
    const data = [{
        timestamp: '2018-01-01'
    }];

    it('exists', function() {
        expect(_.transformValueMap).to.be.a('function');
    });

    it('transforms values for a given path', function() {
        expect(_.isDate(data[0].timestamp)).to.be.false;

        _.transformValueMap(data, 'timestamp', _.toDate);

        expect(_.isDate(data[0].timestamp)).to.be.true;
    });
});
