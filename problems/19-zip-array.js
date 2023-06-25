let zipArray = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
};

try {
  module.exports = zipArray;
} catch (error) {
  module.exports = null;
}
