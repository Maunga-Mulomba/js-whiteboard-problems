function powerSequence(base, length) {
  let result = [base];

  for (let i = 1; i < length; i++) {
    let last = result[result.length - 1];
    result.push(last * base);
  }

  return result;
}

try {
  module.exports = powerSequence;
} catch (error) {
  module.exports = null;
}
