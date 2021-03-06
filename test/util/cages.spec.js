const expect = require('chai').expect;
const path = require('path');
const _ = require(path.join(__dirname, '../../dist/lodash-addons'));

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

describe('getFinite', function() {
    it('exists', function() {
        expect(_.getFinite).to.be.a('function');
    });

    it('returns valid number', function() {
        expect(_.getFinite(5)).to.equal(5);
    });

    it('returns default for invalid number', function() {
        expect(_.getFinite('')).to.equal(0);
        expect(_.getFinite(false)).to.equal(0);
        expect(_.getFinite()).to.equal(0);
        expect(_.getFinite(null)).to.equal(0);
        expect(_.getFinite(NaN)).to.equal(0);
    });
});

describe('getFunction', function() {
    it('exists', function() {
        expect(_.getFunction).to.be.a('function');
    });

    it('returns valid getFunction', function() {
        const test = function test() {};
        expect(_.getFunction(test).name).to.equal('test');
    });

    it('returns default for invalid function', function() {
        expect(_.getFunction('')).to.be.a('function');
        expect(_.getFunction(1)).to.be.a('function');
        expect(_.getFunction()).to.be.a('function');
        expect(_.getFunction(null)).to.be.a('function');
    });
});

describe('getMap', function() {
    it('exists', function() {
        expect(_.getMap).to.be.a('function');
    });

    it('returns valid map', function() {
        const map = new Map();
        expect(_.getMap(map)).to.equal(map);
    });

    it('returns default for invalid object', function() {
        expect(_.isMap(_.getMap(''))).to.be.true;
        expect(_.isMap(_.getMap(1))).to.be.true;
        expect(_.isMap(_.getMap())).to.be.true;
        expect(_.isMap(_.getMap(null))).to.be.true;
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
        const obj = { test: 1 };
        expect(_.getObject(obj)).to.equal(obj);
    });

    it('returns default for invalid function', function() {
        expect(_.getObject('')).to.be.an('object');
        expect(_.getObject(1)).to.be.an('object');
        expect(_.getObject()).to.be.an('object');
        expect(_.getObject(null)).to.be.an('object');
    });
});

describe('getPlainObject', function() {
    it('exists', function() {
        expect(_.getPlainObject).to.be.a('function');
    });

    it('returns valid object', function() {
        const obj = { test: 1 };
        expect(_.getPlainObject(obj)).to.equal(obj);
    });

    it('returns default for invalid object', function() {
        expect(_.getPlainObject('')).to.be.an('object');
        expect(_.getPlainObject(1)).to.be.an('object');
        expect(_.getPlainObject()).to.be.an('object');
        expect(_.getPlainObject(null)).to.be.an('object');

        const obj = { test: 1 };
        expect(_.getPlainObject(obj)).to.equal(obj);

        expect(_.getPlainObject([])).to.not.equal(obj);
    });
});

describe('getSet', function() {
    it('exists', function() {
        expect(_.getSet).to.be.a('function');
    });

    it('returns valid set', function() {
        const set = new Set();
        expect(_.getSet(set)).to.equal(set);
    });

    it('returns default for invalid set', function() {
        expect(_.isSet(_.getSet(''))).to.be.true;
        expect(_.isSet(_.getSet(false))).to.be.true;
        expect(_.isSet(_.getSet(1))).to.be.true;
        expect(_.isSet(_.getSet())).to.be.true;
        expect(_.isSet(_.getSet(null))).to.be.true;
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

describe('getWeakMap', function() {
    it('exists', function() {
        expect(_.getWeakMap).to.be.a('function');
    });

    it('returns valid weakmap', function() {
        const map = new WeakMap();
        expect(_.getWeakMap(map)).to.equal(map);
    });

    it('returns default for invalid weakmap', function() {
        expect(_.isWeakMap(_.getWeakMap(''))).to.be.true;
        expect(_.isWeakMap(_.getWeakMap(false))).to.be.true;
        expect(_.isWeakMap(_.getWeakMap(1))).to.be.true;
        expect(_.isWeakMap(_.getWeakMap())).to.be.true;
        expect(_.isWeakMap(_.getWeakMap(null))).to.be.true;
    });
});

describe('getWeakSet', function() {
    it('exists', function() {
        expect(_.getWeakSet).to.be.a('function');
    });

    it('returns valid weakset', function() {
        var set = new WeakSet();
        expect(_.getWeakSet(set)).to.equal(set);
    });

    it('returns default for invalid function', function() {
        expect(_.isWeakSet(_.getWeakSet(''))).to.be.true;
        expect(_.isWeakSet(_.getWeakSet(1))).to.be.true;
        expect(_.isWeakSet(_.getWeakSet(false))).to.be.true;
        expect(_.isWeakSet(_.getWeakSet())).to.be.true;
        expect(_.isWeakSet(_.getWeakSet(null))).to.be.true;
    });
});
