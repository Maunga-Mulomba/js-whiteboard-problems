let factorArray = (array, number) => {
  return array.filter((num)=>number % num === 0)
};

try {
  module.exports = factorArray;
} catch (e) {
  module.exports = null;
}
