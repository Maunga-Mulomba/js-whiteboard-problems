function countRepeats(string) {
  let obj = {};
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    let ele = string[i];

    if (ele in obj) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  }

  for (let key in obj) {
    let value = obj[key];

    if (value > 1) {
      count++;
    }
  }

  return count;
}

try {
  module.exports = countRepeats;
} catch (error) {
  module.exports = null;
}
