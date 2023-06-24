const {assert} = require('chai');
const objectToString = require('../problems/34.object-to-string')

describe("objectToString()", () => {
  it("should return a string representing the counts of each character", () => {
    assert.equal(objectToString({ a: 2, b: 4, c: 1 }), "aabbbbc");
    assert.equal(objectToString({ b: 1, o: 2, t: 1 }), "boot");
  });
});
