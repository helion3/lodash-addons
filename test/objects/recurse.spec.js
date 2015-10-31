var lodash = require('lodash');
var expect = require('chai').expect;
var testPath = require('path').join(__dirname, '../../src/objects/recurse');
var _ = require(testPath)(lodash);

module.exports = function() {
    describe('recurse', function() {
        var obj = {
            key: '',
            child: {
                key: '',
                child: {
                    key: ''
                }
            },
            children: [{
                key: ''
            }, {
                key: ''
            }]
        };

        it('exists', function() {
            expect(_.recurse).to.be.a('function');
        });

        it('rejects invalid collection', function() {
            expect(_.recurse).to.throw(TypeError);
        });

        it('rejects invalid collection', function() {
            var result = _.recurse(obj, function(value) {
                if (_.isString(value)) {
                    return 'works';
                }

                return value;
            });

            expect(result.key).to.equal('works');
            expect(result.child.key).to.equal('works');
            expect(result.child.child.key).to.equal('works');
            expect(result.children[0].key).to.equal('works');
            expect(result.children[1].key).to.equal('works');
        });
    });
};
