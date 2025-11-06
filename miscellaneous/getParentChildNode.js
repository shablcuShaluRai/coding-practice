const parentChildPairs1 = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11],
  [14, 4],
  [13, 12],
  [12, 9]
];

function getParentofNode(arr) {
  var obj = {};
  var size = arr.length;

  for (let i = 0; i < size; i++) {
    let [p, c] = arr[i];
    if (!obj[c]) {
      obj[c] = 1;
    } else {
      obj[c] += 1;
    }
    if (!obj[p]) {
      obj[p] = 0;
    }
  }
  let noparent = [],
    oneparent = [];

  for (let k in obj) {
    let z = obj[k] === 0,
      o = obj[k] === 1;
    if (z) noparent.push(+k);
    if (o) oneparent.push(+k);
  }
  return { noparent, oneparent };
}

console.log(getParentofNode(parentChildPairs1));
