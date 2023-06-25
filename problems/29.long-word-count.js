function longWordCount(string) {
  let words = string.split(" ");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 7) {
      count++;
    }
  }
  return count;
}

try {
  module.exports = longWordCount;
} catch (error) {
  module.exports = null;
}
