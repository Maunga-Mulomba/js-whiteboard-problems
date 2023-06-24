const { assert } = require("chai");
const countScores = require("../problems/15-count-scores");

describe("countScores()", () => {
  it("should return an object that has key-value pairs where each name is a key and the value is their total score", () => {
    // Example 1:
    const ppl = [
      { name: "Anthony", score: 10 },
      { name: "Fred", score: 10 },
      { name: "Anthony", score: -8 },
      { name: "Winnie", score: 12 },
    ];
    assert.deepEqual(countScores(ppl),{ Anthony: 2, Fred: 10, Winnie: 12 })

    // Example 2
    const peeps = [
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
    ];

    assert.deepEqual(countScores(peeps),{ Anthony: 4, Fred: 4, Winnie: 6 })
  });
});

/*
describe("breakDownObj()", function() {
    it("should return an array of object keys and values", function() {
        const object1 = { name: "Rupert", age: 5, speak: "Meow" };

        const test1 = breakDownObj(object1);

        const object2 = { location: "NY", borough: "Brooklyn" };
        const test2 = breakDownObj(object2);

        const result1 = ["name", "age", "speak", "Rupert", 5, "Meow"];
        const result2 = ["location", "borough", "NY", "Brooklyn"];

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
    });
});
*/
