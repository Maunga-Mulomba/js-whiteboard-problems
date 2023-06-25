let pairProduct = (arr, num) => {
  let result = [];

  let i = 0;
  while (i < arr.length - 1) {
    let num1 = arr[i];

    let j = i + 1;
    while (j <= arr.length - 1) {
      let num2 = arr[j];

      if (num1 * num2 === num) {
        result.push([i, j]);
      }

      j++;
    }

    i++;
  }

  return result;
};

try {
  module.exports = pairProduct;
} catch (error) {
  module.exports = null;
}
