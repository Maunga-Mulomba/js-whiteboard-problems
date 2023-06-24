const { assert } = require("chai");
const pairProduct = require("../problems/27-pair-product");

describe("pairProduct()", () => {
  it("should return pairs of indices whose elements multiply to num with no pair appearing more than once in the result", () => {
    assert.deepStrictEqual(pairProduct([1, 2, 3, 4, 5], 4), [[0, 3]]);
    assert.deepStrictEqual(pairProduct([1, 2, 3, 4, 5], 8), [[1, 3]]);
    assert.deepStrictEqual(pairProduct([1, 2, 3, 12, 8], 24), [
      [1, 3],
      [2, 4],
    ]);
  });
});


