function mindPsAndQs(str) {
  let longestStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "P" || char === "Q") {
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return longestStreak;
}

try {
  module.exports = mindPsAndQs;
} catch (error) {
  module.exports = null;
}
