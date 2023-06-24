const {assert} = require('chai');
const commonFactors = require('../problems/52.common-factors')

describe("commonFactors()", () => {
  it("should return an array that contains the common factors between both numbers", () => {
    assert.deepStrictEqual(commonFactors(12, 50), [1, 2]);
    assert.deepStrictEqual(commonFactors(6, 24), [1, 2, 3, 6]);
    assert.deepStrictEqual(commonFactors(11, 22), [1, 11]);
    assert.deepStrictEqual(commonFactors(45, 60), [1, 3, 5, 15]);
  });
});
