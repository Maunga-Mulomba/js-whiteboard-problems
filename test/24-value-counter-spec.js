const { assert } = require("chai");
const valueCounter = require("../problems/24-value-counter");

describe("valueCounter()", () => {
  it("should return the number of times val repeats as a value in obj", () => {
    const obj1 = { 1: "Anne", 2: "Alvin", 3: "Anne", 4: "Anne" };
    assert.equal(valueCounter(obj1, "Anne"), 3); // => 3

    const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
    assert.equal(valueCounter(obj2, 88),0); // => 0

    const pairs = { Anne: "Roman", Alvin: "Roman", JJ: "Anne", Roman: "Anne" };
    assert.equal(valueCounter(pairs, "Roman"),2); // => 2
  });
});
