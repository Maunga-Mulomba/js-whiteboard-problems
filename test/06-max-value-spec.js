const { assert } = require("chai");
const maxValue = require("../problems/06-max-value");

describe("maxValue()", () => {
  it("should return the largest value in array", () => {
    assert.equal(maxValue([12, 6, 43, 2]), 43);
    assert.equal(maxValue([]), null);
    assert.equal(maxValue([-4, -10, 0.43]), 0.43);
  });
});
