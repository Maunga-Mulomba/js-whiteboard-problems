function commonFactors(num1, num2) {
  let result = [];
  let min = Math.min(num1, num2);

  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result.push(i);
    }
  }

  return result;
}

try {
  module.exports = commonFactors;
} catch (error) {
  module.exports = null;
}
