// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  

  function caesar(input, shift, encode = true) {
    const messageChars = input.toLowerCase().split("");
    const result = [];
    
    messageChars.forEach((messageChar) => {
      let shiftedValue = alphabet.findIndex((letter) => letter === messageChar) + shift;
      const shiftedChar = alphabet[shiftedValue];
      result.push(shiftedChar);
    })
    
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
