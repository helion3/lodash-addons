var expect = require('chai').expect;

module.exports = function(_) {
    describe('getPrototype', function() {
        it('exists', function() {
            expect(_.getPrototype).to.be.a('function');
        });

        it('returns prototype for arrays', function() {
            expect(_.getPrototype([]).concat).to.be.a('function');
        });

        it('returns prototype for boolean', function() {
            expect(_.getPrototype(false).valueOf).to.be.a('function');
        });

        it('returns prototype for numbers', function() {
            expect(_.getPrototype(5).toFixed).to.be.a('function');
        });

        it('returns prototype for object', function() {
            expect(_.getPrototype({}).hasOwnProperty).to.be.a('function');
        });

        it('returns prototype for strings', function() {
            expect(_.getPrototype('').split).to.be.a('function');
        });

        it('returns null for values without a prototype', function() {
            expect(_.getPrototype(null)).to.be.undefined;
            expect(_.getPrototype(undefined)).to.be.undefined;
        });

        it('returns prototype for functions', function() {
            var Test = function Test() {};
            Test.prototype.on = function() {};

            var proto = _.getPrototype(Test);

            expect(proto.on).to.be.a('function');
        });
    });
};
