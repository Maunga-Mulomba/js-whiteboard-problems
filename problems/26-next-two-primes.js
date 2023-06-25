const isPrime = require("./05-is-prime");

let nextTwoPrimes = (num) => {
  let result = [];
  let number = num + 1;

  while (result.length < 2) {
    if (isPrime(number)) {
      result.push(number);
    }
    number++;
  }

  return result;
};

try {
  module.exports = nextTwoPrimes;
} catch (error) {
  module.exports = null;
}
