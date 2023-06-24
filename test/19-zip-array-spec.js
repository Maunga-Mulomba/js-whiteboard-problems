const { assert } = require("chai");
const zipArray = require("../problems/19-zip-array");

describe("zipArray()", () => {
  it("should take in two arrays and zips them together by returning a single 2D-array", () => {
    const a1 = ["a", "b", "c", "d"];
    const a2 = [10, 20, 30, 40];
    const result = zipArray(a1, a2);

    assert.deepStrictEqual(result, [
      ["a", 10],
      ["b", 20],
      ["c", 30],
      ["d", 40],
    ]);
  });
});
