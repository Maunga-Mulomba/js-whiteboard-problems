const {assert} = require('chai');
const oddWordsOut = require('../problems/50.odd-words-out')

describe("oddWordsOut()", () => {
  it("should return the sentence where words with an odd number of characters are removed", () => {
    assert.equal(oddWordsOut("go to the store and buy milk"), "go to milk");
    assert.equal(oddWordsOut("what is the answer"), "what is answer");
  });
});
