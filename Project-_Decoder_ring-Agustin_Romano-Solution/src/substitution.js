// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;

    const realAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphabetArray = alphabet.toLowerCase().split("");

    const onlyUniqueChars = subAlphabetArray.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;

    const encodeMessage = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = realAlphabetArray.indexOf(char);
        const encodedChar = subAlphabetArray[charIndex];
        result.push(encodedChar);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlphabetArray.indexOf(char);
        const decodedChar = realAlphabetArray[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    // errors
    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };