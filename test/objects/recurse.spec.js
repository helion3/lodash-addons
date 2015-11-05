var expect = require('chai').expect;

module.exports = function(_) {
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
