const { assert } = require("chai");
const intersect = require("../problems/11-intersect");

describe("intersect()", () => {
  it("should return a new array containing the elements common to both arr1 and arr2", () => {
    assert.deepStrictEqual(intersect(["a", "b", "c", "d"], ["b", "d", "e"]), [
      "b",
      "d",
    ]);
    assert.deepStrictEqual(intersect(["a", "b", "c"], ["x", "y", "z"]), []);
  });
});
