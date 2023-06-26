function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

try {
  module.exports = myIndexOf;
} catch (e) {
  module.exports = null;
}
