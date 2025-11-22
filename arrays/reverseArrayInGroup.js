const n = 33;
const k = 13;
const arr = [
  36,
  93,
  64,
  48,
  96,
  55,
  70,
  0,
  82,
  30,
  16,
  22,
  38,
  53,
  19,
  50,
  91,
  43,
  70,
  88,
  10,
  57,
  14,
  94,
  13,
  36,
  59,
  32,
  54,
  58,
  18,
  82,
  67
];

function reverseArrayInGroupFunc(arr, n, k) {
  let i = 0,
    j = 0,
    newArr = [];
  if (!arr) return [];
  while (j < n) {
    j = n - j < k ? n : i + k;
    const selectedElemnt = arr.slice(i, j).reverse();
    newArr.push(...selectedElemnt);
    i = j;
  }
  arr.splice(0, n, ...newArr);
  return arr;
}

console.log("reverseArrayInGroup", reverseArrayInGroupFunc(arr, n, k));
module.exports = reverseArrayInGroupFunc;
