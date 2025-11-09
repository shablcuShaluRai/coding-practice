// Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
// Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal.

// Example 1:

// Input:
// N = 5
// A[] = {1,2,5,4,0}
// B[] = {2,4,5,0,1}
// Output: 1
// Explanation: Both the array can be
// rearranged to {0,1,2,4,5}
// Example 2:

// Input:
// N = 3
// A[] = {1,2,5}
// B[] = {2,4,15}
// Output: 0
// Explanation: A[] and B[] have only
// one common value.

function check(arr, bArr, n) {
  arr.sort((a, b) => a - b);
  bArr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (arr[i] !== bArr[i]) {
      return 0;
    }
  }
  return 1;
}
const n = 5;
const arr = [1, 2, 5, 4, 0];
const bArr = [2, 4, 5, 0, 1];
console.log("check arr", check(arr, bArr, n));
