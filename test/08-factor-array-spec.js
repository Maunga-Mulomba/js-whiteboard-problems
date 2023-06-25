const { assert } = require("chai");
const factorArray = require("../problems/08-factor-array");

describe("factorArray()", () => {
  it("should take in an array and a number and return all factors of that number", () => {
    assert.deepStrictEqual(factorArray([2, 3, 4, 5, 6], 20), [2, 4, 5]);
    assert.deepStrictEqual(factorArray([2, 3, 4, 5, 6], 35), [5]);
    assert.deepStrictEqual(factorArray([10, 15, 20, 25], 5), []);
  });
});
