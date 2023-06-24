const { assert } = require("chai");
const valueConcat = require("../problems/38.value-concat");

describe("valueConcat()", () => {
  it("should return a new array where each element is concatenated with it's corresponding value from the object", () => {
    const arr = ["alex", "maurice", "meagan", "ali"];
    const obj = { alex: "bronca", ali: "harris" };

    assert.deepStrictEqual(valueConcat(arr, obj), [
      "alexbronca",
      "maurice",
      "meagan",
      "aliharris",
    ]);

    assert.deepStrictEqual(valueConcat(["a", "b", "c"], { b: 2, c: 3 }), [
      "a",
      "b2",
      "c3",
    ]);
  });
});
