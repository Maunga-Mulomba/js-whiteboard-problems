const { assert } = require("chai");
const oddRange = require("../problems/09-odd-range");

describe("oddrange()", () => {
  it("should take in a number and return an array containing all positive odd numbers up to that number", () => {
    assert.deepStrictEqual(oddRange(13), [1, 3, 5, 7, 9, 11, 13]);
    assert.deepStrictEqual(oddRange(6), [1, 3, 5]);
  });
});
