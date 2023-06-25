function lcm(num1, num2) {
  let lowestNum = num2

  while(true) {
    if(lowestNum % num1 === 0 && lowestNum % num2 === 0) {
      return lowestNum
    }

    lowestNum++
  }
}

try {
  module.exports = lcm;
} catch (error) {
  module.exports = null;
}
