let countScores = (people) => {
  let totalScore = {};
  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    if (person.name in totalScore) {
      totalScore[person.name] += person.score;
    } else {
      totalScore[person.name] = person.score;
    }
  }

  return totalScore;
};

try {
  module.exports = countScores;
} catch (error) {
  module.exports = null;
}
