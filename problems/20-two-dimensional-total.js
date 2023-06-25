let twoDimensionalTotal = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let subArr = array[i];

    for (let j = 0; j < subArr.length; j++) {
      let num = subArr[j];
      sum += num;
    }
  }

  return sum;
};

try {
  module.exports = twoDimensionalTotal;
} catch (error) {
  module.exports = null;
}
