const { assert } = require("chai");
const twoDimensionalSize = require('../problems/28.two-dimensional-size')

describe("twoDimensionalSize()", () => {
  it("should return the total number of elements in the 2D-array", () => {
    const arr1 = [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8, 9],
    ];
    assert.equal(twoDimensionalSize(arr1), 9);

    const arr2 = [["a"], ["b", "c", "d", "e"]];
    assert.equal(twoDimensionalSize(arr2), 5);
  });
});
