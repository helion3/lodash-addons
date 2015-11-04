var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/arrays/exceptKeys');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('exceptKeys', function() {
        it('exists', function() {
            expect(_.exceptKeys).to.be.a('function');
        });

        var arr = [1, 2, 3];

        it('rejects invalid source array', function() {
            expect(_.exceptKeys).to.throw(TypeError);
        });

        it('rejects invalid keys array', function() {
            var wrapped = function() {
                _.exceptKeys([]);
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('rejects invalid function', function() {
            var wrapped = function() {
                _.exceptKeys([], []);
            };

            expect(wrapped).to.throw(TypeError);
        });

        it('iterates array except given keys', function() {
            var iteratedKeys = [];

            _.exceptKeys(arr, [1], function(value, key) {
                iteratedKeys.push(key);
            });

            expect(iteratedKeys).to.have.length(2);
            expect(iteratedKeys[0]).to.equal(0);
            expect(iteratedKeys[1]).to.equal(2);
        });
    });
};
