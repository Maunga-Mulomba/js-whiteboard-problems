let divisibleByThreePairSum = (array) => {
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    let num1 = array[i];
    for (let j = i + 1; j <= array.length - 1; j++) {
      let num2 = array[j];
      let sum = num1 + num2;

      if (sum % 3 === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

try {
  module.exports = divisibleByThreePairSum;
} catch (error) {
  module.exports = null;
}
