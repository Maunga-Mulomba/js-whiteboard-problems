let logBetweenStepper = (min, max, step) => {
  let result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
};

try {
  module.exports = logBetweenStepper;
} catch (e) {
  module.exports = null;
}
