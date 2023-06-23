const { assert } = require("chai");
const isPrime = require("../problems/05-is-prime");

describe("isPrime()", () => {
  it("should return true if number is prime. Otherwise, false", () => {
    assert.equal(isPrime(2), true);
    assert.equal(isPrime(10), false);
    assert.equal(isPrime(11), true);
    assert.equal(isPrime(9), false);
    assert.equal(isPrime(2017), true);
  });
});
