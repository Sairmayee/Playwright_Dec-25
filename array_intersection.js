// 1. Define the intersection function
function intersection(arr1, arr2) {
  const result = []; // Requirement 1 & 2

  // 3. Loop through arr1 and check for common elements
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];

    // Check if element exists in arr2 AND is not already in result
    if (arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }

  return result; // Requirement 5
}

// 4. Example calls

// Typical case
console.log(intersection([1, 2, 3, 4], [3, 4, 5])); 
// Output: [3, 4]

// No common elements
console.log(intersection([10, 20, 30], [1, 2, 3])); 
// Output: []

// All elements common
console.log(intersection([5, 6, 7], [5, 6, 7])); 
// Output: [5, 6, 7]

// Case with duplicates in input arrays
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 3])); 
// Output: [2, 3]