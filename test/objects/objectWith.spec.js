var expect = require('chai').expect;

module.exports = function(_) {
    describe('objectWith', function() {
        it('exists', function() {
            expect(_.objectWith).to.be.a('function');
        });

        it('returns object with desired property', function() {
            var obj = _.objectWith('key', true);

            expect(obj).to.be.an('object');
            expect(obj.key).to.be.true;
        });

        it('returns nested objects from path', function() {
            var obj = _.objectWith('parent.child.grandchild', true);

            expect(obj).to.be.an('object');
            expect(obj.parent.child.grandchild).to.be.true;
        });

        it('adds property to existing object', function() {
            var obj = _.objectWith({ test: true }, 'deep.key', true);

            expect(obj.test).to.be.true;
            expect(obj.deep.key).to.be.true;
        });
    });
};
