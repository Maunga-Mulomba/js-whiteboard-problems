const {assert} = require('chai');
const signFlipCount = require('../problems/47.sign-flip-count')


describe("signFlipCount()", () => {
  it("should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa", () => {
    assert.equal(signFlipCount([5, 6, 10, 3]), 0);
    assert.equal(signFlipCount([-12, 0, -3, -5]), 0);
    assert.equal(signFlipCount([-12, 10, -3, -5]), 2);
    assert.equal(signFlipCount([1, -2, -3, -4]), 1);
    assert.equal(signFlipCount([-1, 11.3, -3, 100]), 3);
  });
});
