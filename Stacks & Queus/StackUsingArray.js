class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    // return this.array[this.array.length - 1];
    console.log(this.array[this.array.length - 1]);
  }
  push(value) {
    this.array.push(value);
    console.log(this);
  }
  pop() {
    this.array.pop();
    console.log(this);
  }
}
const myStack = new Stack();
//myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('Discord');
myStack.push('yt');
myStack.peek();
myStack.pop();
