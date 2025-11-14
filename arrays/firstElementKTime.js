// Given an array of N integers.
// Find the first element that occurs atleast K number of times.

// Example 1:

// Input :
// N = 7, K = 2
// A[] = {1, 7, 4, 3, 4, 8, 7}
// Output :
// 4
// Explanation:
// Both 7 and 4 occur 2 times.
// But 4 is first that occurs 2 times.

// 3 1
// 3 1 2

// 4 3
// 5 4 3 4

function firstElementKTime(arr, n, k) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    if (k === obj[arr[i]]) return val;
  }
  return -1;

  // solution 2
  // const mapObj = new Map();
  // for (let i = 0; i < arr.length; i++) {
  //   let num = arr[i];
  //   mapObj[num] = (mapObj[num] || 0) + 1;
  //   if (mapObj[num] === k) {
  //     return num;
  //   }
  // }
  // return -1;
}

console.log(
  "firstElementKTime",
  firstElementKTime([1, 7, 4, 3, 4, 8, 7], 7, 1)
);
