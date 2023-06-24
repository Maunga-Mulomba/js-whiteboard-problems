const { assert } = require("chai");
const peakFinder = require("../problems/17-peak-finder");

describe("peakFinder()", () => {
  it("should return an array containing the indices of all the peaks", () => {
    assert.deepStrictEqual(peakFinder([1, 2, 3, 2, 1]), [2]);
    assert.deepStrictEqual(peakFinder([2, 1, 2, 3, 4, 5]), [0, 5]);
    assert.deepStrictEqual(
      peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]),
      [2, 6, 8]
    );
  });
});
