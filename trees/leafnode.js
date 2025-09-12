export function findAllLeafNode(root, arr) {
  if (root !== null) {
    if (root.left === null && root.right === null) {
      arr.push(root.value);
    }
    findAllLeafNode(root.right, arr);
    findAllLeafNode(root.left, arr);
  }
  return arr;
}
