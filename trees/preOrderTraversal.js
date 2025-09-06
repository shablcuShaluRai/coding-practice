export function preOrderTraversal(node, callback) {
  if (node !== null) {
    callback(node.value);
    preOrderTraversal(node.left, callback);
    preOrderTraversal(node.right, callback);
  }
}
