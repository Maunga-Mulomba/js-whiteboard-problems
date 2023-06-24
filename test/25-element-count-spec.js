const { assert } = require("chai");
const elementCount = require("../problems/25-element-count");

describe("elementCount()", () => {
  it("should return an object where each key is for the element in the array and value is for how many times the element appears in the array ", () => {
    assert.deepStrictEqual(elementCount(["a", "a", "b", "b"]), { a: 2, b: 2 });
    assert.deepStrictEqual(elementCount(["c", "a", "c", "a", "b"]), {
      c: 2,
      a: 2,
      b: 1,
    });
  });
});
