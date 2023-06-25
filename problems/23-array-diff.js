let arrayDiff = (arr1, arr2) => {
  return arr1.filter((ele)=>!arr2.includes(ele))
};

try {
  module.exports = arrayDiff;
} catch (error) {
  module.exports = null;
}
