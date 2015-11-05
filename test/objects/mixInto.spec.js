var expect = require('chai').expect;

module.exports = function(_) {
    describe('mixInto', function() {
        it('exists', function() {
            expect(_.mixInto).to.be.a('function');
        });

        var obj = {};

        var Base = Object.create({
            test: function() {}
        });

        var Mixinable = function Mixinable() {};
        Mixinable.prototype.on = function() {};
        Mixinable.prototype.emit = function() {};

        it('rejects invalid target object', function() {
            expect(_.mixInto).to.throw.TypeError;
        });

        it('rejects invalid mixinable', function() {
            var wrapped = function() {
                _.mixinTo({});
            };

            expect(wrapped).to.throw.TypeError;
        });

        it('mixes in methods to an object', function() {
            obj = _.mixInto(obj, Mixinable);

            expect(obj.on).to.be.a('function');
            expect(obj.emit).to.be.a('function');
        });

        it('mixes in methods to an object', function() {
            Base = _.mixInto(Base, Mixinable);

            expect(Base.on).to.be.a('function');
            expect(Base.test).to.be.a('function');
        });

        it('handles invalid arguments', function() {
            var wrapped = function() {
                _.mixInto(Base);
            };

            expect(wrapped).to.not.throw(Error);
        });
    });
};
