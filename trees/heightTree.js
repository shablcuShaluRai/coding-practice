export function height(node) {
  let leftHeight = 0,
    rightHeight = 0;
  if (!node) return 0;
  leftHeight = height(node.left);
  rightHeight = height(node.right);
  return Math.max(leftHeight + rightHeight) + 1;
}
