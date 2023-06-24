const { assert } = require("chai");
const vowelShift = require("../problems/56.vowel-shift");

describe("vowelShift()", () => {
  it("should return a new sentence, where every vowel is replaced with the next vowel in the alphabet", () => {
    const VOWELS = ["a", "e", "i", "o", "u"];
    assert.equal(vowelShift("bootcamp"), "buutcemp");
    assert.equal(vowelShift("hello world"), "hillu wurld");
    assert.equal(vowelShift("on the hunt"), "un thi hant");
  });
});
