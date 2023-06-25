function reverse2D(array) {
  let string = "";

  for (let i = array.length - 1; i >= 0; i--) {
    let subarr = array[i];

    for (let j = subarr.length - 1; j >= 0; j--) {
      string += subarr[j];
    }
  }

  return string;
}

try {
  module.exports = reverse2D;
} catch (error) {
  module.exports = null;
}
