function greatestCommonFactor(num1, num2) {
  let highestFactor = 1;

  for (let i = 1; i <= num2; i++) {
    if (num1 % i == 0 && num2 % i === 0 && i > highestFactor) {
      highestFactor = i;
    }
  }

  return highestFactor;
}

try {
  module.exports = greatestCommonFactor;
} catch (error) {
  module.exports = null;
}
