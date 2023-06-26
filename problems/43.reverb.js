function reverb(word) {
  let vowels = "aeiou";

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];

    if (vowels.includes(char.toLowerCase())) {
      return word + word.slice(i);
    }
  }

  return word;
}

try {
  module.exports = reverb;
} catch (error) {
  module.exports = null;
}
