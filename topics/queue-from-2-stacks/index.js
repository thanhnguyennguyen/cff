const Stack = require('../stack/index');

class Queue1 {
    // put your code here to address problems
    constructor(stack1, stack2) {
        this.stack1 = stack1;
        this.stack2 = stack2;
    }
    enqueue(record) {
        // - Pop out all elements from Stack1, push to Stack2
        while (this.stack1.top()) {
            this.stack2.push(this.stack1.pop());
        }
        // - Push new record to Stack1
        this.stack1.push(record);
        // - Pop out all elements from Stack2, push back to Stack1
        while (this.stack2.top()) {
            this.stack1.push(this.stack2.pop());
        }
    }
    dequeue() {
        return this.stack1.pop();
    }
    peek() {
        return this.stack1.data;
    }
}

class Queue2 {
    // put your code here to address problems
    constructor(stack1, stack2) {
        this.stack1 = stack1;
        this.stack2 = stack2;
    }
    enqueue(record) {
        this.stack1.push(record);
    }
    dequeue() {
        let result;
        // - Pop out all elements from Stack1, push to Stack2
        while (this.stack1.top()) {
            this.stack2.push(this.stack1.pop());
        }
        // - Pop from Stack2
        result = this.stack2.pop();
        // - Pop out all remaining elements from Stack2, push back to Stack1
        while (this.stack2.top()) {
            this.stack1.push(this.stack2.pop());
        }
        return result;
    }
    peek() {
        return this.stack1.data;
    }
}

module.exports = {
    Queue1,
    Queue2
};
