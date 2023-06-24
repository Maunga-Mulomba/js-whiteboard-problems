const {assert} = require('chai');
const isPassing = require('../problems/37.is-passing')

describe("isPassing()", () => {
  it("should return true if the average assessment score is at least 70, else false", () => {
    const assessments1 = [
      { number: 1, score: 60 },
      { number: 2, score: 90 },
      { number: 3, score: 80 },
      { number: 4, score: 100 },
      { number: 5, score: 85 },
    ];

    assert.equal(isPassing(assessments1), true);
    const assessments2 = [
      { number: 1, score: 60 },
      { number: 2, score: 20 },
      { number: 3, score: 45 },
    ];

    assert.equal(isPassing(assessments2), false);
  });
});
