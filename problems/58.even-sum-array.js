function evenSumArray(array) {
  return array.map((num) => sumEvens(num));
}

function sumEvens(num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

try {
  module.exports = evenSumArray;
} catch (error) {
  module.exports = null;
}
