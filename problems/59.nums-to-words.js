function numsToWords(numString) {
  let object = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  let result = "";

  for (let i = 0; i < numString.length; i++) {
    let num = numString[i];
    result += object[num];
  }

  return result;
}

try {
  module.exports = numsToWords;
} catch (error) {
  module.exports = null;
}
