const { assert } = require("chai");
const adults = require("../problems/14-adults");

describe("adults()", () => {
  it("should return an array containing the names of those who have an age of 18 or higher", () => {
    const ppl = [
      { name: "John", age: 20 },
      { name: "Jim", age: 13 },
      { name: "Jane", age: 18 },
      { name: "Bob", age: 7 },
    ];
    assert.deepStrictEqual(adults(ppl), ["John", "Jane"]);
  });
});
