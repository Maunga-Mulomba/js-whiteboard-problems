const {assert} = require("chai");
const logBetweenStepper = require("../problems/02-log-between-stepper");

describe("logBetweenStepper()", () => {
  it("eturn an array of numbers between min and max at step intervals", () => {
    assert.deepStrictEqual(logBetweenStepper(5, 9, 1), [5, 6, 7, 8, 9]);
    assert.deepStrictEqual(
      logBetweenStepper(-10, 15, 5),
      [-10, -5, 0, 5, 10, 15]
    );
  });
});
