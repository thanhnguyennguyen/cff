
const Queue = require('../queue-implementation/index')
const weave = (queue1, queue2) => {
    // put your code here to address problems
    let queue = new Queue(),
        queue1Data = queue1.dequeue(),
        queue2Data = queue2.dequeue();
    while(queue1Data || queue2Data) {
        if (queue1Data) {
            queue.enqueue(queue1Data);
            queue1Data = queue1.dequeue();
        }
        if (queue2Data) {
            queue.enqueue(queue2Data);
            queue2Data = queue2.dequeue();
        }
    }
    return queue;
}

module.exports = weave;
