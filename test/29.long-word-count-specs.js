const { assert } = require("chai");
const longWordCount = require('../problems/29.long-word-count')

describe("longWordCount()", () => {
  it("should return the number of words in the string longer than 7 characters", () => {
    assert.equal(longWordCount(""), 0);
    assert.equal(longWordCount("short words only"), 0);
    assert.equal(longWordCount("one reallylong word"), 1);
    assert.equal(longWordCount("two reallylong words inthisstring"), 2);
    assert.equal(longWordCount("allwordword longwordword wordswordword"), 3);
    assert.equal(longWordCount("seventy schfifty five"), 1);
  });
});
