function threeUniqueVowels(string) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let uniqueVowels = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (VOWELS.includes(char) && !uniqueVowels.includes(char)) {
      uniqueVowels += char;
    }
  }

  return uniqueVowels.length >= 3;
}

try {
  module.exports = threeUniqueVowels;
} catch (error) {
  module.exports = null;
}
