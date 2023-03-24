// Write your tests here!
const expect = require("chai").expect
const {substitution} = require("../src/substitution");

describe('Substitution() Testing',()=>{
    describe('Error Handling',()=>{
        it('alphabet should be string of 26 characters',()=>{
            const actual = substitution("apple","ab");
            expect(actual).to.be.false
        });
        it('alphabet characters must be unique',()=>{
            const actual = substitution("pear","abcabca$ca#cewqesaplamksks");
            expect(actual).to.be.false
        });
        it('alphabet unique 2',()=>{
            const actual = substitution("I love oranges","abcdefghojklmnopqrstuvwxya");
            expect(actual).to.be.false
        });
        it('no alphabet',()=>{
            const actual = substitution("coding is great");
            expect(actual).to.be.false  
        });
    })
    describe('Encoding handling',()=>{
        it('spaces preserved',()=>{
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne"
            expect(actual).equal(expected)
        });
        it('capital letters ignored',()=>{
            const actual = substitution("YOU ARE AN excellent sPy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne"
            expect(actual).equal(expected)
        });
        it('special characters work',()=>{
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "y&ii$r&"
            expect(actual).equal(expected)
        });
        it('encode given alphabet',()=>{
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrufscpw"
            expect(actual).equal(expected)
        });
    })
    describe('Decoding functionality',()=>{
        it('spaces preserved',()=>{
            const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev",false);
            const expected = "you are an excellent spy"
            expect(actual).equal(expected)
        });
        it('capital letters ignored',()=>{
            const actual = substitution("elP xhm xF mbyMwwmfj dne", "xoyqmcgrukswaflnthdjpzibev",false);
            const expected = "you are an excellent spy"
            expect(actual).equal(expected)
        });
        it('special characters work',()=>{
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl",false);
            const expected = "message"
            expect(actual).equal(expected)
        });
        it('decode given alphabet',()=>{
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "thinkful"
            expect(actual).equal(expected)
        });
    })
})