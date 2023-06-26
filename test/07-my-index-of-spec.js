const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myIndexOf = require("../problems/07-my-index-of");

describe("myIndexOf()", function () {
  it("should return the index value of the target if it is present in the array, else -1", () => {
    let result1 = myIndexOf([1, 2, 3, 4], 4);
    expect(result1).to.eql(3);

    let result2 = myIndexOf([1, 2, 3, 4], 12);
    expect(result2).to.eql(-1);
  });

  it("should not call the built-in `indexOf`", function () {
    let array = [1, 2, 3, 4];
    let indexOfSpy = chai.spy.on(array, "indexOf");
    let result = myIndexOf(array, 4);
    expect(result).to.eql(3);
    expect(indexOfSpy).to.not.have.been.called();
  });

  it("should not call the built-in `includes`", function () {
    let array = [1, 2, 3, 4];
    let includesSpy = chai.spy.on(array, "includes");
    let result = myIndexOf(array, 4);
    expect(result).to.eql(3);
    expect(includesSpy).to.not.have.been.called();
  });

});
