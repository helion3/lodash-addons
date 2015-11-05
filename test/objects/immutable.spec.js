var expect = require('chai').expect;

module.exports = function(_) {
    describe('immutable', function() {
        it('exists', function() {
            expect(_.immutable).to.be.a('function');
        });

        var obj;

        it('returns object with desired property', function() {
            obj = _.immutable({}, 'TEST', true);

            expect(obj).to.be.an('object');
            expect(obj.TEST).to.be.true;
        });

        it('property is immutable', function() {
            obj.TEST = false;
            expect(obj.TEST).to.be.true;

            var desc = Object.getOwnPropertyDescriptor(obj, 'TEST');
            expect(desc.writable).to.be.false;
            expect(desc.enumerable).to.be.true;
            expect(desc.configurable).to.be.false;
        });
    });
};
