// import Node from "./node";
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class BST {
  constructor() {
    this.root = null;
  }

  isValidBST() {}
}

const tnewree = new TreeNode(2, 1, 3, null, null, 5, 7);
console.log("tnewree", tnewree);
