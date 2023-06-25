let printReverse = (min, max) => {
  // declare empty array
  // loop from max - 1 to min(exclusive)
  // push each num into array and return

  let result = [];
  for (let i = max - 1; i > min; i--) {
    result.push(i);
  }
  return result;
};

try {
  module.exports = printReverse;
} catch (e) {
  module.exports = null;
}
