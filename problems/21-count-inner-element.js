let countInnerElement = (arr) => {
  let object = {};

  for (let i = 0; i < arr.length; i++) {
    let subarray = arr[i];

    for (let j = 0; j < subarray.length; j++) {
      let ele = subarray[j];

      if (ele in object) {
        object[ele] += 1;
      } else {
        object[ele] = 1;
      }
    }
  }

  return object;
};

try {
  module.exports = countInnerElement;
} catch (error) {
  module.exports = null;
}
