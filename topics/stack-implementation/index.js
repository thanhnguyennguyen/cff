
class Stack {
    // put your code here to address problems
    constructor() {
        this.data = [];
    }
    push(record) {
        this.data.push(record);
    }
    pop() {
        return this.data.pop();
    }
    top() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;
