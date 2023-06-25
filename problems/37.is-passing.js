function isPassing(assessments) {
  let size = assessments.length;

  let total = assessments.reduce((accum, object) => {
    return accum + object.score;
  }, 0);

  let avg = total/size

  return avg > 70
}

try {
  module.exports = isPassing;
} catch (error) {
  module.exports = null;
}
