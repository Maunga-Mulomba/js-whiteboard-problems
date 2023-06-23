const { assert } = require("chai");
const reverseHyphenString = require("../problems/10-reverse-hyphen-string");

describe("reverseHyphenString()", () => [
  it("should returns a the hyphenated string reversed", () => {
    assert.equal(reverseHyphenString("Go-to-the-store"), "store-the-to-Go");
    assert.equal(
      reverseHyphenString("Jump,-jump-for-joy"),
      "joy-for-jump-Jump,"
    );
  }),
]);
