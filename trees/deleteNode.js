export function deleteNode(root, value) {
  if (value < root.value) {
    if (root.left === null) {
      return "value does not exist";
    } else if (root.left.value === value) {
      root.left = root.left.right;
      root = root.right;
    } else {
      return deleteNode(root.left, value);
    }
  } else {
    if (value > root.value) {
      if (root.right === null) {
        return "value does not exist";
      } else if (root.right.value === value) {
        root.right = root.right.right;
        root = root.right;
      } else {
        return deleteNode(root.right, value);
      }
    }
  }
}
