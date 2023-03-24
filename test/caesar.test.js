// Write your tests here!
const expect = require("chai").expect
const {caesar} = require("../src/caesar");

describe("Caesar Functionality Testing",()=>{
    describe('Handling errors',()=>{
        it(`Shift value isn't present`,()=>{
            const actual = caesar("apple")
            expect(actual).to.be.false
        });
        it('Shift value is less than -25',()=>{
            const actual = caesar("pear",-30)
            expect(actual).to.be.false
        })
        it('Shift value is greather than 25',()=>{
            const actual = caesar("I love numbers",99,false)
            expect(actual).to.be.false
        })
    })
    describe('encoding message',()=>{
        it('Spaces maintained throughout, as should other nonalphabetic symbols.',()=>{
            const actual = caesar("This is a secret message!", 8)
            const expected =  'bpqa qa i amkzmb umaaiom!'
            expect(actual).equal(expected)
        });
        it('Letter that goes of alphabet get wrapped around',()=>{
            const actual = caesar("I have a zebra!", 2)
            const expected =  'k jcxg c bgdtc!'
            expect(actual).equal(expected)
        });
    })
    describe('decoding message',()=>{
        it('Spaces maintained throughout, as should other nonalphabetic symbols',()=>{
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
            const expected =  'this is a secret message!'
            expect(actual).equal(expected)
        });
        it('left shift',()=>{
            const actual = caesar("d gjqz ajjy", -5, false)
            const expected =  'i love food'
            expect(actual).equal(expected)
        });
    })
})