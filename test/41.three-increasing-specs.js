const {assert} = require('chai');
const threeIncreasing = require('../problems/41.three-increasing')


describe("threeIncreasing()", () => {
  it("should returns true if the array contains 3 consecutive numbers in increasing order", () => {
    assert.equal(threeIncreasing([3, 2, 11, 12, 13, 2, 4]), true);
    assert.equal(threeIncreasing([7, 2, 4, 5, 2, 1, 6]), false);
  });
});

// 11 -- arr[i]
// 12 -- arr[i + 1]
