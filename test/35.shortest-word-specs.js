const { assert } = require("chai");
const shortestWord = require("../problems/35.shortest-word");

describe("shortestWord()", () => {
  it("should returns the shortest word of a sentence", () => {
    assert.equal(shortestWord("app academy is cool"), "is");
    assert.equal(shortestWord("programming bootcamp"), "bootcamp");
  });
});
