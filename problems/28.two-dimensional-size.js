let twoDimensionalSize = (array) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let subarr = array[i];

    for (let j = 0; j < subarr.length; j++) {
      count++;
    }
  }

  return count;
};

try {
  module.exports = twoDimensionalSize;
} catch (error) {
  module.exports = null;
}
