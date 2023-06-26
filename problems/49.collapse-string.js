function collapseString(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      continue;
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

try {
  module.exports = collapseString;
} catch (error) {
  module.exports = null;
}
