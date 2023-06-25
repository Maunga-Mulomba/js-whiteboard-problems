const isPrime = require("./05-is-prime");

let firstNPrimes = (n) => {
  let primeNums = [];
  let number = 2;

  while (primeNums.length < n) {
    if (isPrime(number)) {
      primeNums.push(number);
    }
    number++;
  }

  return primeNums;
};

try {
  module.exports = firstNPrimes;
} catch (error) {
  module.exports = null;
}
