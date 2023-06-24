const {assert} = require('chai');
const threeUniqueVowels = require('../problems/55.three-unique-vowels')


describe("threeUniqueVowels()", () => {
  it("should returns true if the string contains at least three different vowels", () => {
    const VOWELS = ["a", "e", "i", "o", "u"];
    assert.equal(threeUniqueVowels("delicious"), true);
    assert.equal(threeUniqueVowels("the bootcamp"), true);
    assert.equal(threeUniqueVowels("bootcamp"), false);
    assert.equal(threeUniqueVowels("dog"), false);
    assert.equal(threeUniqueVowels("go home"), false);
  });
});
