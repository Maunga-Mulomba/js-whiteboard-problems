function moreDotLessDash(str) {
  let dot = 0;
  let dash = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === ".") {
      dot++;
    } else if (char === "-") {
      dash++;
    }
  }

  return dot > dash;
}

try {
  module.exports = moreDotLessDash;
} catch (error) {
  module.exports = null;
}
