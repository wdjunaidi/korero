const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;

describe('script', () => {

    const Script = require('../lib/script');

    it('instance of Script only has heard function', done => {
        const script = new Script();

        expect(script.heard).to.be.a.function();
        let foo = script.heard('foo');
        expect(foo).to.be.an.object();
        expect(foo.responseWith).to.be.a.function();
        let bar = foo.responseWith('bar');
        expect(bar).to.shallow.equal(script);
        expect(script.scripts.length).to.equal(1);
        done();
    });

    it('multiple heard() and responseWith() with create correct number of scripts', done => {
        const script = new Script();

        script.heard('one').responseWith('uno')
            .heard('two').responseWith('dos')
            .heard('three').responseWith('tres');
        
        expect(script.scripts.length).to.equal(3);
        done();
    });

});