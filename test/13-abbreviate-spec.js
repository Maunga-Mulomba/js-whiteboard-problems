const { assert } = require("chai");
const abbreviate = require("../problems/13-abbreviate");

describe("abbreviate()", () => {
  it("should return a new sentence where words longer than 4 characters have their vowels removed", () => {
    assert.equal(abbreviate("the bootcamp is fun"), "the btcmp is fun"),
      assert.equal(
        abbreviate("programming is fantastic"),
        "prgrmmng is fntstc"
      ),
      assert.equal(abbreviate("hello world"), "hll wrld"),
      assert.equal(abbreviate("how are you"), "how are you");
  });
});
