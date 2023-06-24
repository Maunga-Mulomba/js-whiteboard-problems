const { assert } = require("chai");
const variableNameify = require("../problems/40.variable-nameify");

describe("variableNameify()", () => {
  it("should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style", () => {
    assert.equal(variableNameify(["is", "prime"]), "isPrime");
    assert.equal(
      variableNameify(["remove", "last", "vowel"]),
      "removeLastVowel"
    );
    assert.equal(variableNameify(["MaX", "VALUE"]), "maxValue");
  });
});
