const { assert } = require("chai");
const twoDiff = require("../problems/22-two-diff");

describe("twoDiff()", () => {
  it("should  return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. Else, return an empty array.", () => {
    assert.deepStrictEqual(twoDiff([2, 3, 4, 6, 1, 7]), [
      [0, 2],
      [1, 4],
      [2, 3]
    ]);
    assert.deepStrictEqual(twoDiff([0, 2, 4, 3, 5]), [
      [0, 1],
      [1, 2],
      [3, 4]
    ]);
    assert.deepStrictEqual(twoDiff([]), []);
  });
});
