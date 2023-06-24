const {assert} = require('chai');
const powerSequence = require('../problems/48.power-sequence')


describe("powerSequence()", () => {
  it("should return an array containing a power sequence with the given length", () => {
    assert.deepStrictEqual(powerSequence(3, 4), [3, 9, 27, 81]);
    assert.deepStrictEqual(powerSequence(2, 6), [2, 4, 8, 16, 32, 64]);
    assert.deepStrictEqual(powerSequence(8, 3), [8, 64, 512]);
  });
});
