let oddRange = (end) => {
  let result = [];

  for (let i = 1; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }

  return result;
};

try {
  module.exports = oddRange;
} catch (error) {
  module.exports = null;
}
