import { findAllLeafNode } from "./leafnode";
import { insertNode } from "./insertNode";
import { deleteNode } from "./deleteNode";
import { lookDepthOfTree } from "./minNode";
import { inorderTraversal } from "./inorderTraversal";
import { preOrderTraversal } from "./preOrderTraversal";
import { postOrderTraversal } from "./postOrderTraversal";
import { height } from "./heightTree";
import Node from "./node";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      insertNode(this.root, newNode);
    }
  }

  delete(value) {
    if (value === this.root.value) {
      this.root.right.left = this.root.left;
      this.root = this.root.right;
      return this;
    } else {
      return deleteNode(this.root, value);
    }
  }

  // minimum value of node in the tree
  findMin() {
    return lookDepthOfTree(this.root);
  }
  // get leaf node
  getLeafNode() {
    return findAllLeafNode(this.root, []);
  }

  // inorder traversal
  inorderTraverse(callack) {
    inorderTraversal(this.root, callack);
  }

  // preorder traversal of node

  preOrderTraverse(callack) {
    preOrderTraversal(this.root, callack);
  }

  // postorder traverse

  postOrderTraverse(callack) {
    postOrderTraversal(this.root, callack);
  }

  // height of tree
  getHeight() {
    return height(this.root);
  }
}
function printNode(value) {
  console.log(value);
}
const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(15);
// tree.insert(9);
// tree.insert(7);
// tree.insert(21);
// tree.insert(7);
[10, 15, 6, 7, 8, 9, 17, 21, 18].map((ar) => tree.insert(ar));
// tree.delete(15);
// tree.delete(18);
console.log("minumum node in the tree", tree.findMin());
console.log("findAllLeafNode of tree", tree.getLeafNode());
console.log("BST tree", tree);
console.log("inrder trAaversal", tree.inorderTraverse(printNode));
console.log("preorder traversal", tree.preOrderTraverse(printNode));
console.log("post order traversal", tree.postOrderTraverse(printNode));
console.log("height of tree", tree.getHeight());
