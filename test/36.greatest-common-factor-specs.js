const {assert} = require('chai');
const greatestCommonFactor = require('../problems/36.greatest-common-factor')

describe("greatestCommonFactor()", () => {
  it("should return the largest number that is divides both num1 and num2", () => {
    assert.equal(greatestCommonFactor(15, 25), 5);
    assert.equal(greatestCommonFactor(16, 24), 8);
    assert.equal(greatestCommonFactor(7, 11), 1);
  });
});
