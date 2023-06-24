const {assert} = require('chai');
const hasSymmetry = require('../problems/57.has-symmetry')

describe("hasSymmetry()", () => {
  it("should return true if the array has symmetry, false otherwise", () => {
    assert.equal(hasSymmetry([1, 2, 3, 3, 2, 1]),true)
    assert.equal(hasSymmetry([1, 2, 3, 3, 4, 1]),false)
    assert.equal(hasSymmetry(["cat", "dog", "bird", "dog", "cat"]),true)
    assert.equal(hasSymmetry(["cat", "dog", "bird", "bird", "cat"]),false)
  });
});
