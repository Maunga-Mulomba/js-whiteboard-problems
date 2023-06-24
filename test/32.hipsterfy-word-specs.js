const { assert } = require("chai");
const hipsterfyWord = require("../problems/32.hipsterfy-word");

describe("hipsterfyWord()", () => {
  it("should return the string with the last vowel removed", () => {
    assert.equal(hipsterfyWord("proper"), "propr");
    assert.equal(hipsterfyWord("tonic"), "tonc");
    assert.equal(hipsterfyWord("PANTHER"), "PANTHR");
    assert.equal(hipsterfyWord("BACKWARDS"), "BACKWRDS");
  });
});
