const { assert } = require("chai");
const divisibleByThreePairSum = require("../problems/18-divisible-by-three-pair-sum");

describe("divisibleByThreePairSum()", () => {
  it("should  return an array of all the pairs of indices, whose elements sum to a multiple of three", () => {
    assert.deepStrictEqual(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]), [
      [0, 4],
      [1, 2],
      [1, 5],
      [2, 5],
      [3, 4],
    ]);
    assert.deepStrictEqual(divisibleByThreePairSum([8, 3, 5, 9, 2]), [[1, 3]]);
  });
});
