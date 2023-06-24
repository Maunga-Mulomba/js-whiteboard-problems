const {assert} = require('chai');
const reverse2D = require('../problems/42.reverse-2D')

describe("reverse2D()", () => {
  it("should return a string representing the elements of the array in reverse order", () => {
    const arr1 = [
      ["a", "b", "c", "d"],
      ["e", "f"],
      ["g", "h", "i"],
    ];

    assert.equal(reverse2D(arr1), "ihgfedcba");

    const arr2 = [
      ["Julian", "Matt", "Mike"],
      ["Oscar", "Patrick"],
    ];
    assert.equal(reverse2D(arr2), "PatrickOscarMikeMattJulian");
  });
});
