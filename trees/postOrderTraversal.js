export function postOrderTraversal(node, callback) {
  if (node !== null) {
    postOrderTraversal(node.left, callback);
    postOrderTraversal(node.right, callback);
    callback(node.value);
  }
}
