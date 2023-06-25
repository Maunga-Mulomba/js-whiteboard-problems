let isPrime = (number) => {
  // if number is less than 2, return false
  // loop from 2 to number(exclusive)
  // if number has a factor within the loop, return false
  // return true after loop

  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

try {
  module.exports = isPrime;
} catch (e) {
  module.exports = null;
}
