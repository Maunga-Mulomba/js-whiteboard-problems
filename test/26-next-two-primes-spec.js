const { assert } = require("chai");
const nextTwoPrimes = require('../problems/26-next-two-primes')

describe("nextTwoPrimes()", () => {
  it("should return the next two prime numbers greater than num", () => {
    assert.deepStrictEqual(nextTwoPrimes(2), [3, 5]); // => [ 3, 5 ]
    assert.deepStrictEqual(nextTwoPrimes(3)[(5, 7)]);
    assert.deepStrictEqual(nextTwoPrimes(7), [11, 13]);
    assert.deepStrictEqual(nextTwoPrimes(8), [11, 13]);
    assert.deepStrictEqual(nextTwoPrimes(20), [23, 29]);
    assert.deepStrictEqual(nextTwoPrimes(97), [101, 103]);
  });
});
