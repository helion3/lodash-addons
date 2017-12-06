const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

describe('hasInOfType', function() {
    it('exists', function() {
        expect(_.hasInOfType).to.be.a('function');
    });

    it('returns false for any non-object', function() {
        expect(_.hasInOfType(1, 'test', _.isString)).to.be.false;
        expect(_.hasInOfType(null, 'test', _.isString)).to.be.false;
        expect(_.hasInOfType(undefined, 'test', _.isString)).to.be.false;
        expect(_.hasInOfType('', 'test', _.isString)).to.be.false;
        expect(_.hasInOfType([], 'test', _.isString)).to.be.false;
    });

    it('returns false due to missing property', function() {
        expect(_.hasInOfType({}, 'test', _.isString)).to.be.false;
    });

    it('returns false due to property of wrong type', function() {
        expect(_.hasInOfType({ test: 5 }, 'test', _.isString)).to.be.false;
    });

    it('returns true due to valid property', function() {
        expect(_.hasInOfType({ test: '' }, 'test', _.isString)).to.be.true;
    });

    it('returns true due to valid array key', function() {
        expect(_.hasInOfType([''], 0, _.isString)).to.be.true;
    });

    it('returns true for path syntax', function() {
        expect(_.hasInOfType({ a: { b: '' } }, 'a.b', _.isString)).to.be.true;
    });

    function MockProto() {};
    MockProto.prototype.obj = {
        val: ''
    };

    const mock = new MockProto();

    it('returns true for a prototype path', function() {
        expect(_.hasInOfType(mock, 'obj.val', _.isString)).to.be.true;
    });
});
