// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const splittedAlphabet = alphabet.split("");
  
  function shiftLetter(letterIndex,shift,encode=true){
    let result = encode?letterIndex+shift:letterIndex-shift;
    if(result > 25){
      result -= 26
    }
    else if(result < 0){
      result += 26
    }
    return result
  }
  
  function caesar(input, shift, encode = true) {
    if(!shift || Math.abs(shift) >= 26){
      return false
    }
    const inputArr = input.toLowerCase().split("")
    let resultString = ""
    inputArr.forEach((letter)=>{
      if(splittedAlphabet.includes(letter)){
        const letterIndex = splittedAlphabet.indexOf(letter)
        resultString += splittedAlphabet[shiftLetter(letterIndex,shift,encode)]
      }
      else{
        resultString+= letter
      }
    })
    return resultString
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
