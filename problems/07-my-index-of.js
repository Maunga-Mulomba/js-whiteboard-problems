let myIndexOf = (array, target) => {
  // loop thru array
  // if current ele is the target, return its index
  // return -1 after loop

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
};

try {
  module.exports = myIndexOf;
} catch (e) {
  module.exports = null;
}
