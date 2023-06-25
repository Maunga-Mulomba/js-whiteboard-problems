let intersect = (arr1, arr2) => {
  return arr1.filter((ele)=>arr2.includes(ele))
};

try {
  module.exports = intersect;
} catch (error) {
  module.exports = null;
}
