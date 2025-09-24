
function reverseArrInPlace(arr) {
  let old;
  if (arr.length > 0) {
    for (let i = 0; i < Math.floor(arr.length - 1) / 2; i++) {
      old = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = old;
    }
  }
  return arr || [];
}
const defaultArr = [1, 2, 3, 4, 5, 6];
document.getElementById("app").innerHTML = reverseArrInPlace(defaultArr);
console.log("default arr", defaultArr);
