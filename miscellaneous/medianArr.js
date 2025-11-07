//Given an array arr[] of N integers, calculate the median

function findMedian(arr) {
  //code here
  let median = 0;
  arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    const med = Math.floor((arr.length - 1) / 2);
    const next = med + 1;
    median = Math.floor((arr[med] + arr[next]) / 2);
  } else {
    const med = (arr.length - 1) / 2;
    median = arr[med];
  }

  return median;
}

// const arr = [56, 67, 30, 79];
const anotherArr = [90, 100, 78, 89, 67];

console.log("findMedian", findMedian(anotherArr));
