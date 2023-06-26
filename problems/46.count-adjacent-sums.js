function countAdjacentSums(arr, n) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === n) {
      count++;
    }
  }

  return count;
}

try {
  module.exports = countAdjacentSums;
} catch (error) {
  module.exports = null;
}
