var expect = require('chai').expect;

module.exports = function(_) {
    describe('requestSetter', function() {
        it('exists', function() {
            expect(_.requestSetter).to.be.a('function');
        });

        var obj = _.requestSetter({ id: false }, 'id');
        var setId;

        it('returns a valid setter function', function() {
            expect(obj.requestIdSetter).to.be.a('function');

            setId = obj.requestIdSetter();
            expect(setId).to.be.a('function');
        });

        it('returns a valid getter function', function() {
            expect(obj.getId).to.be.a('function');
        });

        it('throws an error if setter requested again', function() {
            var wrapped = function() {
                obj.requestIdSetter();
            };

            expect(wrapped).to.throw(Error);
        });

        it('sets value', function() {
            expect(obj.getId()).to.be.false;

            setId(1);
            expect(obj.getId()).to.equal(1);
        });

        var setName;

        it('returns a second valid setter function', function() {
            obj = _.requestSetter(obj, 'name');
            expect(obj.requestNameSetter).to.be.a('function');

            setName = obj.requestNameSetter();
            expect(setName).to.be.a('function');
        });

        it('sets value', function() {
            expect(obj.getName()).to.be.undefined;

            setName('Kermit');
            expect(obj.getName()).to.equal('Kermit');
        });

        it('throws an error if setter requested again', function() {
            var wrapped = function() {
                obj.requestIdSetter();
            };

            expect(wrapped).to.throw(Error);
        });

        it('all values equal last set', function() {
            expect(obj.getId()).to.equal(1);
            expect(obj.getName()).to.equal('Kermit');
        });

        it('relinquishes setter', function() {
            expect(obj.relinquishNameSetter).to.be.a('function');

            obj.relinquishNameSetter();
            expect(obj.requestNameSetter()).to.be.a('function');
        });

        it('properly camel-cases names', function() {
            obj = _.requestSetter(obj, 'selectedRow');
            expect(obj.requestSelectedRowSetter).to.be.a('function');
        });
    });
};
