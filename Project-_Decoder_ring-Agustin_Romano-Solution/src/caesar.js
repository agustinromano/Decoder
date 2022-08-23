// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // ASCII Table 97-122 thats a-z
    let lowerCase = input.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";

    for (let i = 0; i < lowerCase.length; i++) {
      let currentLetter = lowerCase[i];
      if (alphabet.indexOf(currentLetter) < 0) {
        result += currentLetter;
        continue;
      }

      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + shift;

      if (newIndex > 26) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;

      if (encode === false) {
        newIndex = currentIndex - shift;
        if (newIndex >= 26) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
      }

      result += alphabet[newIndex];
    }
    if (shift === 0 || shift < -25 || shift > 25) return false;
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

//shift = shift % 26;
