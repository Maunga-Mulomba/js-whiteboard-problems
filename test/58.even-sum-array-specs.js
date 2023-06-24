const { assert } = require("chai");
const evenSumArray = require("../problems/58.even-sum-array");

describe("evenSumArray()", () => {
  it("should return a new array where each num is replaced with the sum of all even numbers less than or equal to that num", () => {
    assert.deepStrictEqual(evenSumArray([6, 7, 5]), [12, 12, 6]);
    assert.deepStrictEqual(evenSumArray([2, 8, 3, 5]), [2, 20, 2, 6]);
  });
});
