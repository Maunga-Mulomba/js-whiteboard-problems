let abbreviate = (sentence) => {
  let words = sentence.split(' ')

  let newWords = words.map((word)=>{
    if(word.length > 4) {
      return removeVowels(word)
    } else {
      return word
    }
  })

  return newWords.join(' ')
};

let removeVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!vowels.includes(char)) {
      newStr += char;
    }
  }

  return newStr;
};

try {
  module.exports = abbreviate;
} catch (error) {
  module.exports = null;
}
