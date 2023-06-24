const { assert } = require("chai");
const hipsterfy = require("../problems/33.hipsterfy");

describe("hipsterfy()", () => {
  it("should remove the last vowel from each word in the string", () => {
    assert.equal(hipsterfy("proper"), "propr");
    assert.equal(hipsterfy("proper tonic panther"), "propr tonc panthr");
    assert.equal(hipsterfy("towel flicker banana"), "towl flickr banan");
    assert.equal(hipsterfy("runner anaconda"), "runnr anacond");
    assert.equal(
      hipsterfy("turtle cheeseburger fries"),
      "turtl cheeseburgr fris"
    );
  });
});
