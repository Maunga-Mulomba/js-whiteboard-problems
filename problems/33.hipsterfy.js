const hipsterfyWord = require('./32.hipsterfy-word')

function hipsterfy(sentence) {
  let words = sentence.split(' ')
  let newSentence = words.map((word)=>hipsterfyWord(word))
  return newSentence.join(' ')
}

try {
  module.exports = hipsterfy;
} catch (error) {
  module.exports = null;
}
