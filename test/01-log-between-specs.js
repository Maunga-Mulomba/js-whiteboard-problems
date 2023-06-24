const { assert } = require("chai");
const logBetween = require("../problems/01-log-between");

describe("logBetween()", () => {
  it("should return an array from lowNum to highNum, inclusive", () => {
    assert.deepStrictEqual(logBetween(-1, 2), [-1, 0, 1, 2]);
    assert.deepStrictEqual(logBetween(14, 6), []);
    assert.deepStrictEqual(logBetween(4, 6), [4, 5, 6]);
  });
});
const {assert} = require('chai');
