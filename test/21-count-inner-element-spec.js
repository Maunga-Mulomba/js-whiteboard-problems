const { assert } = require("chai");
const countInnerElement = require("../problems/21-count-inner-element");

describe("countInnerElement()", () => {
  it("should return an object that counts how many times each element in each sub array repeats", () => {
    const arr1 = [
      [1, 2, 4, 5],
      [2, 7, 4],
      [1, 4, 5, 2, 7],
    ];

    const arr2 = [
      ["a", "b", "c", "d"],
      ["a", "b"],
      ["a", "c", "d", "a"],
    ];

    assert.deepStrictEqual(countInnerElement(arr1), {
      1: 2,
      2: 3,
      4: 3,
      5: 2,
      7: 2,
    });
    assert.deepStrictEqual(countInnerElement(arr2), { a: 4, b: 2, c: 2, d: 2 });
  });
});
