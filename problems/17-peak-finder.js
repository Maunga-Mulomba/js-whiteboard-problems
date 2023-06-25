let peakFinder = (array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] > array[i + 1]) {
      result.push(i);
    } else if ((i === array.length - 1 && array[i] > array[i - 1])) {
      result.push(i);
    } else if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      result.push(i);
    }
  }

  return result;
};

try {
  module.exports = peakFinder;
} catch (error) {
  module.exports = null;
}
