function threeIncreasing(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + 1 === arr[i + 1] && arr[i] + 2 === arr[i + 2]) {
      return true;
    }
  }

  return false;
}

try {
  module.exports = threeIncreasing;
} catch (error) {
  module.exports = null;
}
