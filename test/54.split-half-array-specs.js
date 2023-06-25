const { assert } = require("chai");
const splitHalfArray = require("../problems/54.split-half-array");

describe("splitHalfArray()", () => {
  it("should return two halves of an array split in the middle", () => {
    assert.deepStrictEqual(splitHalfArray([1, 2, 3, 4, 5]), [
      [1, 2],
      [4, 5],
    ]);

    assert.deepStrictEqual(splitHalfArray(["a", "b", "c", "d", "e", "f"]), [
      ["a", "b", "c"],
      ["d", "e", "f"],
    ]);
  });
});
