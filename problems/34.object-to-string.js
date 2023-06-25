function objectToString(count) {
  let str = "";

  for (let key in count) {
    let value = count[key];
    str += key.repeat(value);
  }

  return str;
}

try {
  module.exports = objectToString;
} catch (error) {
  module.exports = null;
}
