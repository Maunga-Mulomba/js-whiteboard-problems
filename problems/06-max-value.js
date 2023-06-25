let maxValue = (array) => {
  // if the array is empty, return null
  // declare largest variable and set to first ele in array
  // loop from second element
  // if an ele is bigger than current variable, assign varible to this num
  // return variable after loop

  if(array.length === 0) {
    return null
  }

  let maxNum = array[0]

  for(let i = 1; i < array.length; i++) {
    if(array[i] > maxNum) {
      maxNum = array[i]
    }
  }

  return maxNum
};

try {
  module.exports = maxValue;
} catch (e) {
  module.exports = null;
}
