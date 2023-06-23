const { assert } = require("chai");
const printReverse = require("../problems/03-print-reverse");

describe("printReverse()", () => {
  it("should return an array of all numbers from max to min (exclusive), in reverse order", () => {
    assert.deepStrictEqual(printReverse(13, 18), [17, 16, 15, 14]);
    assert.deepStrictEqual(printReverse(90, 94), [93, 92, 91]);
  });
});
