// Given an array Arr[] of size N and an integer K,
//  you have to add the first two minimum elements of the array
// until all the elements are greater than or equal to K and find
// the number of such operations required.

// Example 1:

// Input:
// N = 6, K = 6
// Arr[] = {1, 10, 12, 9, 2, 3}
// Output: 2
// Explanation: First we add (1 + 2), now the
// new list becomes 3 10 12 9 3, then we add
// (3 + 3), now the new list becomes 6 10 12 9,
// Now all the elements in the list are greater
// than 6. Hence the output is 2 i:e 2 operations
// are required to do this.
// Example 2:

// Input:
// N = 4, K = 4
// Arr[] = {5, 4, 6, 4}
// Output: 0
// Explanation: Every element in the given array
// is greater than or equal to K.

const getIsValidArray = (arr, k) => arr.every((ar) => k <= ar);

function minOperations(arr, k) {
  let isValidArr = getIsValidArray(arr, k);
  let query = 0;
  while (!isValidArr) {
    const sortArr = arr.sort((a, b) => a - b);
    let fmin = sortArr[0];
    let smin = sortArr[1];
    const total = fmin + smin;
    if (total <= k) {
      sortArr.splice(0, 2);
      sortArr.unshift(fmin + smin);
      query = query + 1;
    }
    isValidArr = getIsValidArray(sortArr, k);
  }

  return query;
}
const arr = [1, 10, 12, 9, 2, 3];
const k = 6;
console.log("min operation", minOperations(arr, k));
