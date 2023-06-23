const { assert } = require("chai");
const spies = require("chai-spies");
const myIndexOf = require("../problems/07-my-index-of");

describe("myIndexOf()", () => {
  let indexOfSpy = chai.spy.on(Array.prototype, "indexOf");
  let includesSpy = chai.spy.on(Array.prototype, "includes");

  it("should return the index value of the target if it is present in the array or -1 if it is not present", () => {
    assert.equal(myIndexOf([1, 2, 3, 4], 4), 3);
    assert.equal(myIndexOf([5, 6, 7, 8], 2), -1);
  });

  it("should not use indexOf or includes built-in methods", () => {
    // what assertion to use
  });
});
