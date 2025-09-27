class Stacknode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.top = -1;
  }

  push(val) {
    const newNode = new Stacknode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    ++this.top;
  }

  pop() {
    if (!this.first) return -1;
    if (this.first === this.last) {
      this.last = null;
    }
    var temp = this.first;
    this.first = this.first.next;
    --this.top;
    return temp.value;
  }
}

const Stacks = new Stack();
Stacks.push(10);
Stacks.push(20);
Stacks.push(30);
Stacks.push(40);

console.log("stacks", Stacks);

Stacks.pop();
Stacks.pop();
console.log("stacks after", Stacks);
