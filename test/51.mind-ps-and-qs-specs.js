const {assert} = require('chai');
const mindPsAndQs = require('../problems/51.mind-ps-and-qs')

describe("mindPsAndQs()", () => {
  it("should  return the length of the longest consecutive streak of the letters 'P' and 'Q'", () => {
    assert.equal(mindPsAndQs("BOOTCAMP"), 1);
    assert.equal(mindPsAndQs("APCDQQPPC"), 4);
    assert.equal(mindPsAndQs("PQPQ"), 4);
    assert.equal(mindPsAndQs("PPPXQPPPQ"), 5);
  });
});
