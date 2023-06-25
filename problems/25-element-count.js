let elementCount = (array) => {
  let obj = {};

  for (let ele of array) {
    if (ele in obj) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  }

  return obj;
};

try {
  module.exports = elementCount;
} catch (error) {
  module.exports = null;
}
