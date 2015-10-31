var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/finalize');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('finalize', function() {
        it('exists', function() {
            expect(_.finalize).to.be.a('function');
        });

        it('rejects invalid collection', function() {
            expect(_.finalize).to.throw(TypeError);
        });

        var replacement = _.finalize({
            key: '',
            child: {
                key: ''
            },
            children: [{
                key: ''
            }, {
                key: ''
            }]
        });

        it('returns object with immutable property', function() {
            var desc = Object.getOwnPropertyDescriptor(replacement, 'key');
            expect(desc.writable).to.be.false;
            expect(desc.configurable).to.be.false;
        });

        it('returns object with nested immutable property', function() {
            var desc = Object.getOwnPropertyDescriptor(replacement.child, 'key');
            expect(desc.writable).to.be.false;
            expect(desc.configurable).to.be.false;
        });

        it('returns object with array of objects with immutable property', function() {
            var desc = Object.getOwnPropertyDescriptor(replacement.children[0], 'key');
            expect(desc.writable).to.be.false;
            expect(desc.configurable).to.be.false;
        });
    });
};
