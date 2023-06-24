const { assert } = require("chai");
const twoDimensionalTotal = require("../problems/20-two-dimensional-total");

describe("twoDimensionalTotal()", () => {
  it("should take in a 2D array of numbers and returns the total sum of all elements", () => {
    const arr1 = [
      [5, 2, 5, 3],
      [12, 13],
    ];

    const arr2 = [[2], [1, 9], [1, 1, 1]];

    assert.equal(twoDimensionalTotal(arr1), 40);
    assert.equal(twoDimensionalTotal(arr2), 15);
  });
});
