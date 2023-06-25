const { assert } = require("chai");
const mirrorArray = require("../problems/12-mirror-array");

describe("mirrorArray", () => {
  it('should return a new array "mirrored"', () => {
    assert.deepStrictEqual(mirrorArray([1, 2, 3]), [1, 2, 3, 3, 2, 1]);
    assert.deepStrictEqual(mirrorArray(["a", "b", "c", "d"]), [
      "a",
      "b",
      "c",
      "d",
      "d",
      "c",
      "b",
      "a",
    ]);
  });
});
