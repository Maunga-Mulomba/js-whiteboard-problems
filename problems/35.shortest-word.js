function shortestWord(sentence) {
  if (sentence.length === 0) {
    return null;
  }

  let words = sentence.split(" ");
  let smallWord = words[0];

  words.forEach((word) => {
    if (word.length < smallWord.length) {
      smallWord = word;
    }
  });

  return smallWord;
}

try {
  module.exports = shortestWord;
} catch (error) {
  module.exports = null;
}
