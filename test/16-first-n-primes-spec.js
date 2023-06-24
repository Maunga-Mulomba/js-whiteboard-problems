const { assert } = require("chai");
const firstNPrimes = require("../problems/16-first-n-primes");

describe("firstNPrimes()", () => {
  it("should return an array of the first n prime numbers", () => {
    assert.deepStrictEqual(firstNPrimes(0), []);
    assert.deepStrictEqual(firstNPrimes(1), [2]);
    assert.deepStrictEqual(firstNPrimes(4), [2, 3, 5, 7]);
  });
});
