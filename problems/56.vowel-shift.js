function vowelShift(sentence) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let newStr = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (VOWELS.includes(char)) {
      char = nextVowel(char);
    }

    newStr += char;
  }

  return newStr
}

function nextVowel(char) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  let oldIndex = VOWELS.indexOf(char);
  let newIndex = oldIndex + 1;

  if (newIndex >= VOWELS.length) {
    newIndex = newIndex % VOWELS.length;
  }

  return VOWELS[newIndex];
}

try {
  module.exports = vowelShift;
} catch (error) {
  module.exports = null;
}
