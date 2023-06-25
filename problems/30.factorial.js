function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

try {
  module.exports = factorial;
} catch (error) {
  module.exports = null;
}
