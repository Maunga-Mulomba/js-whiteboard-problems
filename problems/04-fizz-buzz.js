let fizzBuzz = (max) => {
  //declare empty array
  // loop from 0 to max, exclusive
  // check if number is divisible by 3 or 5 but both
  // if true, push into array

  let result = [];

  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      result.push(i);
    }
  }

  return result;
};

try {
  module.exports = fizzBuzz;
} catch (e) {
  module.exports = null;
}
