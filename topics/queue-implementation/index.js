
class Queue {
    // put your code here to address problems
    constructor() {
        this.data = [];
    }
    enqueue(record) {
        this.data.unshift(record);
    }
    dequeue() {
        return this.data.pop();
    }
    peek() {
        return this.data;
    }
}

module.exports = Queue;
