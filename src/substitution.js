// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const AlphabetString = 'abcdefghijklmnopqrstuvwxyz'
  const standardAlphabet = AlphabetString.split("");
  
  function checkForDuplicates(alphabet) {
    const valuesAlreadySeen = [];
  
    for (const value of alphabet) {
      if (valuesAlreadySeen.includes(value)) {
        return true;
      }
      valuesAlreadySeen.push(value);
    }
    return false;
  }
  
  function encoder(input,alphabet){
    let result = "";
    const alphabetArray = alphabet.toLowerCase().split("");
    const inputArray = input.toLowerCase().split("");
    for (let i = 0; i < inputArray.length; i++) {
      const letter = inputArray[i];
      if(standardAlphabet.includes(letter)){
        const index = standardAlphabet.indexOf(letter);
        result += alphabetArray[index];
      }
      else{
        result += letter;
      }
    }
    return result;
  }
 
  function decoder(input,alphabet){
    let result = "";
    const alphabetArray = alphabet.toLowerCase().split("");
    const inputArray = input.toLowerCase().split("");
    for (let i = 0; i < inputArray.length; i++) {
      const letter = inputArray[i];
      if(alphabetArray.includes(letter)){
        const index = alphabetArray.indexOf(letter);
        result += standardAlphabet[index];
      }
      else{
        result += letter;
      }
    }
    return result;
  }
  
  function substitution(input, alphabet, encode = true) {
    if(!alphabet|| alphabet.length < 26|| checkForDuplicates(alphabet)){
      return false
    }
    if(encode){
      return encoder(input,alphabet)
    }
    else{
      return decoder(input,alphabet)
    }
  }

  return {
    substitution,
    checkForDuplicates,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
