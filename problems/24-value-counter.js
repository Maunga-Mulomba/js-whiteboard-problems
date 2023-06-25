let valueCounter = (obj, val) => {
  let count = 0;

  for (let key in obj) {
    let value = obj[key];

    if (value === val) {
      count++;
    }
  }

  return count;
};

try {
  module.exports = valueCounter;
} catch (error) {
  module.exports = null;
}
