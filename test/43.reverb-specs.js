const { assert } = require("chai");
const reverb = require("../problems/43.reverb");

describe("reverb()", () => {
  it("should return the word with all characters after the last vowel repeated", () => {
    assert.equal(reverb("running"), "runninging");
    assert.equal(reverb("wild"), "wildild");
    assert.equal(reverb("debugged"), "debuggeded");
    assert.equal(reverb("my"), "my");
  });
});
