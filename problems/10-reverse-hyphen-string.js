let reverseHyphenString = (string) => {
  // split into array at hyphen
  //reverse and join at hypen

  return string.split('-').reverse().join('-')
};

try {
  module.exports = reverseHyphenString;
} catch (error) {
  module.exports = null;
}
