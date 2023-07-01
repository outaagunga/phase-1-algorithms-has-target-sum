function hasTargetSum(arr, target) {
    // Write your algorithm here
  const complements = new Set();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;

    if (complements.has(num)) {
      // add your own custom tests in here
      return true;
    }

    complements.add(complement);
  }

  return false;
}

module.exports = hasTargetSum;
