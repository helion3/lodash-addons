var expect = require('chai').expect;

module.exports = function(_) {
    describe('getArray', function() {
        it('exists', function() {
            expect(_.getArray).to.be.a('function');
        });

        it('returns valid array', function() {
            expect(_.getArray([])).to.be.an('array');
        });

        it('returns default for invalid array', function() {
            expect(_.getArray('')).to.be.an('array');
            expect(_.getArray(1)).to.be.an('array');
            expect(_.getArray()).to.be.an('array');
            expect(_.getArray(null)).to.be.an('array');
        });

        it('returns custom default for invalid array', function() {
            expect(_.getArray('', [1])).to.have.length(1);
        });
    });

    describe('getBoolean', function() {
        it('exists', function() {
            expect(_.getBoolean).to.be.a('function');
        });

        it('returns valid boolean', function() {
            expect(_.getBoolean(true)).to.equal(true);
        });

        it('returns default for invalid boolean', function() {
            expect(_.getBoolean('')).to.equal(false);
            expect(_.getBoolean(1)).to.equal(false);
            expect(_.getBoolean()).to.equal(false);
            expect(_.getBoolean(null)).to.equal(false);
        });

        it('returns custom default for invalid boolean', function() {
            expect(_.getBoolean('', true)).to.equal(true);
        });
    });

    describe('getFunction', function() {
        it('exists', function() {
            expect(_.getFunction).to.be.a('function');
        });

        it('returns valid getFunction', function() {
            var test = function test() {};
            expect(_.getFunction(test).name).to.equal('test');
        });

        it('returns default for invalid function', function() {
            expect(_.getFunction('')).to.be.a('function');
            expect(_.getFunction(1)).to.be.a('function');
            expect(_.getFunction()).to.be.a('function');
            expect(_.getFunction(null)).to.be.a('function');
        });
    });

    describe('getNumber', function() {
        it('exists', function() {
            expect(_.getNumber).to.be.a('function');
        });

        it('returns valid number', function() {
            expect(_.getNumber(5)).to.equal(5);
        });

        it('returns default for invalid number', function() {
            expect(_.getNumber('')).to.equal(0);
            expect(_.getNumber(false)).to.equal(0);
            expect(_.getNumber()).to.equal(0);
            expect(_.getNumber(null)).to.equal(0);
        });

        it('returns custom default for invalid number', function() {
            expect(_.getNumber('', -1)).to.equal(-1);
        });
    });

    describe('getObject', function() {
        it('exists', function() {
            expect(_.getObject).to.be.a('function');
        });

        it('returns valid getFunction', function() {
            var obj = { test: 1 };
            expect(_.getObject(obj)).to.equal(obj);
        });

        it('returns default for invalid function', function() {
            expect(_.getObject('')).to.be.an('object');
            expect(_.getObject(1)).to.be.an('object');
            expect(_.getObject()).to.be.an('object');
            expect(_.getObject(null)).to.be.an('object');
        });
    });

    describe('getString', function() {
        it('exists', function() {
            expect(_.getString).to.be.a('function');
        });

        it('returns valid string', function() {
            expect(_.getString('test')).to.equal('test');
        });

        it('returns default for invalid string', function() {
            expect(_.getString(1)).to.equal('');
            expect(_.getString(false)).to.equal('');
            expect(_.getString()).to.equal('');
            expect(_.getString(null)).to.equal('');
        });

        it('returns custom default for invalid string', function() {
            expect(_.getString(5, 'example')).to.equal('example');
        });
    });
};
