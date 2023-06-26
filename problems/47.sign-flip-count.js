function signFlipCount(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < 0 && nums[i + 1] > 0) {
      count++;
    } else if (nums[i] > 0 && nums[i + 1] < 0) {
      count++;
    }
  }
  return count;
}

try {
  module.exports = signFlipCount;
} catch (error) {
  module.exports = null;
}
