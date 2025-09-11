export function lookDepthOfTree(root) {
  if (root.left === null) {
    return root.value;
  } else {
    return lookDepthOfTree(root.left);
  }
}
