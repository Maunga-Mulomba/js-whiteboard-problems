let mirrorArray = (array) => {
  let reverse = array.slice().reverse();
  return array.concat(reverse)
};

try {
  module.exports = mirrorArray;
} catch (error) {
  module.exports = null;
}
