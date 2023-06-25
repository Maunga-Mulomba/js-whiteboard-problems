const {assert} = require('chai');
const commonPrimeFactors = require('../problems/53.common-prime-factors')

describe("commonPrimeFactors()", () => {
  it("should return an array of all prime factors that are common between the two numbers", () => {
    assert.deepStrictEqual(commonPrimeFactors(12, 50), [2]);
    assert.deepStrictEqual(commonPrimeFactors(6, 24), [2, 3]);
    assert.deepStrictEqual(commonPrimeFactors(11, 22), [11]);
    assert.deepStrictEqual(commonPrimeFactors(45, 60), [3, 5]);
  });
});
