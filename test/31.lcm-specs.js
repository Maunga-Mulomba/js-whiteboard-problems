const { assert } = require("chai");
const lcm = require('../problems/31.lcm')


describe("lcm()", () => {
  it("should return the lowest number which is a multiple of both num1 and num2", () => {
    assert.equal(lcm(2, 3), 6);
    assert.equal(lcm(6, 10), 30);
    assert.equal(lcm(24, 26), 312);
  });
});
