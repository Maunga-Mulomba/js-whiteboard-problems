const { assert } = require("chai");
const fizzBuzz = require("../problems/04-fizz-buzz");

describe("fizzBuzz()", () => {
  it("return an array of every number from 0 to max that is divisible by either 3 or 5, but not both", () => {
    assert.deepStrictEqual(fizzBuzz(20), [3, 5, 6, 9, 10, 12, 18]);
  });
});
