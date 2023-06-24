const {assert} = require('chai');
const factorial = require('../problems/30.factorial')

describe("factorial()", () => {
  it("should return the factorial of the number n", () => {
    assert.equal(factorial(1), 1);
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), 120);
    assert.equal(factorial(10), 3628800);
  });
});
