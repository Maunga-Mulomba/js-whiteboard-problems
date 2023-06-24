const { assert } = require("chai");
const numsToWords = require('../problems/59.nums-to-words')

describe("numsToWords()", () => {
  it("should  return a new string where each digit character of the string is replaced with it's word representation", () => {
    assert.equal(numsToWords("42"), "FourTwo");
    assert.equal(numsToWords("123"), "OneTwoThree");
    assert.equal(numsToWords("159598"), "OneFiveNineFiveNineEight");
  });
});
