function oddWordsOut(sentence) {
  let words = sentence.split(' ')
  let result = words.filter((word)=>word.length % 2 === 0)
  return result.join(' ')
}

try {
  module.exports = oddWordsOut;
} catch (error) {
  module.exports = null;
}
