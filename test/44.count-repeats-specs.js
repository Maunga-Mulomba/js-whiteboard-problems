const {assert} = require('chai');
const countRepeats = require('../problems/44.count-repeats')

describe("countRepeats()", () => {
  it("should return the number of letters that appear more than once in the string", () => {
    assert.equal(countRepeats("calvin"), 0);
    assert.equal(countRepeats("caaaalvin"), 1);
    assert.equal(countRepeats("pops"), 1);
    assert.equal(countRepeats("mississippi"), 3);
    assert.equal(countRepeats("hellobootcampprep"), 4);
  });
});
