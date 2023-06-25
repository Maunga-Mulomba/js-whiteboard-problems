let twoDiff = (array) => {
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    let num1 = array[i];

    for (let j = i + 1; j <= array.length - 1; j++) {
      let num2 = array[j];

      if (Math.abs(num1 - num2) === 2) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

try {
  module.exports = twoDiff;
} catch (error) {
  module.exports = null;
}
