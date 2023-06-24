const { assert } = require("chai");
const pairsToString = require("../problems/45.pairs-to-string");

describe("pairsToString()", () => {
  it("should return a string corresponding to the pairs in each array", () => {
    const array1 = [
      ["a", 3],
      ["b", 1],
      ["c", 2],
    ];
    assert.equal(pairsToString(array1), "aaabcc");

    const array2 = [
      ["f", 1],
      ["o", 2],
      ["d", 1],
      ["!", 1],
    ];
    assert.equal(pairsToString(array2), "food!");
  });
});
