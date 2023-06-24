const {assert} = require('chai');
const collapseString = require('../problems/49.collapse-string')

describe("collapseString()", () => {
  it("should return the string where 'streaks' of consecutive characters are collapsed to a single character", () => {
    assert.equal(collapseString("apple"), "aple");
    assert.equal(collapseString("AAAaalviiiiin!!!"), "Aalvin!");
    assert.equal(collapseString("hello   app academy"), "helo ap academy");
  });
});
