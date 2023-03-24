// Write your tests here!
const expect = require("chai").expect
const {polybius} = require("../src/polybius");

describe('Polybius Functionality',()=>{
    describe('Encoding message',()=>{
        it('output should be string',()=>{
            const actual = polybius("thinkful")
            expect(actual).to.be.a('string')
        });
        it('Spaces maintained throughout',()=>{
            const actual = polybius("hello world");
            const expected = '3251131343 2543241341'
            expect(actual).equal(expected)
        });
        it('Capitals ignored',()=>{
            const actual = polybius("Hello world");
            const expected = '3251131343 2543241341'
            expect(actual).equal(expected)
        });
        it('I/J becomes 42',()=>{
            const actual = polybius("thinkful")
            const expected = '4432423352125413'
            expect(actual).equal(expected)
        });
    });
    describe('Decoding message',()=>{
        it('Spaces maintained throughout',()=>{
            const actual = polybius("3251131343 2543241341", false);
            const expected = 'hello world';
            expect(actual).equal(expected)
        });
        it('number of characters should be even excluding spaces',()=>{
            const actual = polybius("44324233521254134", false);
            expect(actual).to.be.false
        });
        it('letters i/j share a space',()=>{
            const actual = polybius("4432423352125413", false);
            const expected = 'th(i/j)nkful';
            expect(actual).equal(expected)
        });
    })
})