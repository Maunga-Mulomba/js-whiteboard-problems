const { assert } = require("chai");
const arrayDiff = require('../problems/23-array-diff')

describe("arrayDiff()", () => {
  it("return a new array, containing the elements of arr1 that are not also in arr2", () => {
    const array1 = [1, 23, 2, 43, 3, 4];
    const array2 = [3, 23];
    assert.deepStrictEqual(arrayDiff(array1, array2), [1, 2, 43, 4]);

    const array3 = ["a", "ab", "c", "d", "c"];
    const array4 = ["d"];
    assert.deepStrictEqual(arrayDiff(array3, array4), ["a", "ab", "c", "c"]);
  });
});
