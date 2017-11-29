var expect = require('chai').expect;

module.exports = function(_) {
    describe('transformValueMap', function() {
        var data = [{
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
};
