function variableNameify(words) {
  let newWords = words.map((word) => {
    if (word === words[0]) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  return newWords.join("");
}

try {
  module.exports = variableNameify;
} catch (error) {
  module.exports = null;
}
