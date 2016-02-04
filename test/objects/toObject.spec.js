var expect = require('chai').expect;

module.exports = function(_) {
    describe('toObject', function() {
        var Complex = function() {
            this.toObject = function() {
                return { key: 'value' };
            };
        };

        var test = {
            parent: new Complex(),
            children: [new Complex(), new Complex()],
            invalid: undefined
        };

        it('exists', function() {
            expect(_.toObject).to.be.a('function');
        });

        it('originally qualifies as non-plain-object', function() {
            expect(_.isPlainObject(test.parent)).to.be.false;
            expect(_.isPlainObject(test.children[0])).to.be.false;
            expect(_.isPlainObject(test.children[1])).to.be.false;
        });

        it('recursively converts to plain objects', function() {
            var plain = _.toObject(test);
            expect(_.isPlainObject(plain.parent)).to.be.true;
            expect(_.isPlainObject(plain.children[0])).to.be.true;
            expect(_.isPlainObject(plain.children[1])).to.be.true;
        });

        var Test = function() {};
        Test.prototype.toObject = function() {
            return {};
        };

        it('allows toObject methods on a prototype', function() {
            var protoTest = new Test();
            expect(_.isPlainObject(protoTest)).to.be.false;
            expect(_.isPlainObject(_.toObject(protoTest))).to.be.true;
        });
    });
};
