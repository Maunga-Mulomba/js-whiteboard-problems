function pairsToString(arr) {
  let string = "";

  for (let row of arr) {
    string += row[0].repeat(row[1]);
  }

  return string;
}

try {
  module.exports = pairsToString;
} catch (error) {
  module.exports = null;
}
