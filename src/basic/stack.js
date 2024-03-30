class Stack {
  constructor() {
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    if (this.size() === 0) {
      throw new Error("stack is empty");
    }
    return this.arr.pop();
  }
  peek() {
    if (this.arr.length === 0) {
      throw new Error("stack is empty");
    }
    return this.arr[this.size() - 1];
  }
}

module.exports = Stack;
