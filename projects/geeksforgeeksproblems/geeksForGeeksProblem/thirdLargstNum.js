// Given an array of distinct elements. Find the third largest element in it.

// Suppose you have A[] = {1, 2, 3, 4, 5, 6, 7}, its output will be 5 because it is the 3 largest element in the array A.

// Example 1:

// Input:
// N = 5
// A[] = {2,4,1,3,5}
// Output: 3
// Example 2:

// Input:
// N = 2
// A[] = {10,2}
// Output: -1

function thirdLargest(a, n) {
  //your code here
  a.sort((a, b) => a - b);
  if (n > 2) return a[n - 3];
  return -1;
}

console.log("thisrdLargets num", thirdLargest([2, 4, 1, 3, 5], 5));
