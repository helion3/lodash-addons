var expect = require('chai').expect;

module.exports = function(_) {
    describe('omitDeep', function() {
        var obj = {
            valid: '',
            invalid: '',
            child: {
                valid: '',
                invalid: '',
                child: {
                    valid: '',
                    invalid: ''
                }
            },
            children: [{
                valid: '',
                invalid: ''
            }, {
                valid: '',
                invalid: ''
            }],
            strings: [
                'test'
            ]
        };

        it('exists', function() {
            expect(_.omitDeep).to.be.a('function');
        });

        var parsed = _.omitDeep(obj, ['invalid']);

        it('removes root level key', function() {
            expect(_.has(parsed, 'valid')).to.be.true;
            expect(_.has(parsed, 'invalid')).to.be.false;
        });

        it('removes second tier key', function() {
            expect(_.has(parsed.child, 'valid')).to.be.true;
            expect(_.has(parsed.child, 'invalid')).to.be.false;
        });

        it('removes third tier key', function() {
            expect(_.has(parsed.child.child, 'valid')).to.be.true;
            expect(_.has(parsed.child.child, 'invalid')).to.be.false;
        });

        it('removes keys in array objects', function() {
            expect(parsed.children).to.be.an('array');
            expect(_.has(parsed.children[0], 'valid')).to.be.true;
            expect(_.has(parsed.children[0], 'invalid')).to.be.false;
            expect(_.has(parsed.children[1], 'valid')).to.be.true;
            expect(_.has(parsed.children[1], 'invalid')).to.be.false;
        });

        it('retains valid, non-object keys', function() {
            expect(parsed.strings[0]).to.equal('test');
        });
    });
};
