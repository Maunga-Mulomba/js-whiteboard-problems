function splitHalfArray(array) {
  let midPoint = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, midPoint);
  let secondHalf;

  if (array.length % 2 === 0) {
    secondHalf = array.slice(midPoint);
  } else {
    secondHalf = array.slice(midPoint + 1);
  }

  let result = [firstHalf, secondHalf];
  return result;
}

try {
  module.exports = splitHalfArray;
} catch (error) {
  module.exports = null;
}
