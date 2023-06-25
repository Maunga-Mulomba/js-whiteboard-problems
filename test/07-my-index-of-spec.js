const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myIndexOf = require("../problems/07-my-index-of");

describe("myIndexOf()", () => {
  it("should return the index value of the target if it is present in the array, else -1", () => {
    let result1 = myIndexOf([1, 2, 3, 4], 4);
    expect(result1).to.eql(3);

    let result2 = myIndexOf([5, 6, 7, 8], 2);
    expect(result2).to.eql(-1);
  });

  it("should not use the built-in `indexOf` or `includes` methods", () => {
    let indexOfSpy = chai.spy.on(Array.prototype, "indexOf");
    let includesSpy = chai.spy.on(Array.prototype, "includes");

    myIndexOf([1, 2, 3, 4], 4);
    expect(indexOfSpy).to.not.have.been.called();
    expect(includesSpy).to.not.have.been.called();
  });
});
