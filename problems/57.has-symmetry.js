function hasSymmetry(array) {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

try {
  module.exports = hasSymmetry;
} catch (error) {
  module.exports = null;
}
