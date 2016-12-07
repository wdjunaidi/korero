const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;

describe('base', () => {
    const base = require('../lib/base');

    it('contains defaultOptions with default value', done => {
        expect(base.defaultOptions).exist();
        expect(base.defaultOptions.continuous).to.be.false();
        expect(base.defaultOptions.interimResuls).to.be.false();
        expect(base.defaultOptions.lang).to.equal('en-US');
        expect(base.defaultOptions.maxAlternatives).to.equal(1);
        done();
    });
    
});