const { assert } = require("chai");
const countAdjacentSums = require("../problems/46.count-adjacent-sums");

describe("countAdjacentSums()", () => {
  it("should count the number of times that two adjacent numbers in an array add up to n", () => {
    assert.equal(countAdjacentSums([1, 5, 1], 6), 2);
    assert.equal(countAdjacentSums([7, 2, 4, 6], 7), 0);
    assert.equal(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13), 3);
  });
});
