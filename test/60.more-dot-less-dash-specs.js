const { assert } = require("chai");
const moreDotLessDash = require("../problems/60.more-dot-less-dash");

describe("moreDotLessDash()", () => {
  it("should return the true if the string contains more dots ('.') than dashes ('-'), false otherwise", () => {
    assert.equal(moreDotLessDash("2-D arrays are fun. I think."), true);
    assert.equal(moreDotLessDash(".-.-."), true);
    assert.equal(moreDotLessDash(".-"), false);
    assert.equal(moreDotLessDash("..--"), false);
  });
});
