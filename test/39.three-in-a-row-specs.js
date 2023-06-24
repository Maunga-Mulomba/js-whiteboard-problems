const {assert} = require('chai');
const threeInARow = require('../problems/39.three-in-a-row')

describe("threeInARow()", () => {
  it("should returns true if the array contains 3 of the same number consecutively, else false", () => {
    assert.equal(threeInARow([4, 3, 7, 7, 7, 13, 8]), true);
    assert.equal(threeInARow([10, 9, 20, 33, 3, 3]), false);
  });
});
