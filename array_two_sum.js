const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

function findPairs(nums, target) {
  // 1. Initialize results array
  const results = [];

  // 2. Nested loop through nums
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 3. Check if sum equals target
      if (nums[i] + nums[j] === target) {
        // 4. Add indices to results
        results.push([i, j]);
      }
    }
  }

  // 5. Return results
  return results;
}

console.log(findPairs(nums, target));
// Output: [ [2, 4], [1, 5] ]