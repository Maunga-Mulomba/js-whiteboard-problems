const isPrime = require("./05-is-prime");

function commonPrimeFactors(num1, num2) {
  let result = [];
  let min = Math.min(num1, num2);

  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0 && isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

try {
  module.exports = commonPrimeFactors;
} catch (error) {
  module.exports = null;
}
