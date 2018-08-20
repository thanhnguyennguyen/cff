const {Queue1, Queue2} = require('./index.js');
const Stack = require('../stack-implementation/index');
// put your tests here
test('test queue-from-2-stacks: pushing works on enqueue', () => {
    let stack1 = new Stack(),
        stack2 = new Stack(),
        q = new Queue1(stack1, stack2);
    expect(q.peek()).toEqual([]);
    q.enqueue(1);
    expect(q.peek()).toEqual([1]);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.peek()).toEqual([3]);
    expect(q.dequeue()).toEqual(3);
    expect(q.peek()).toEqual([]);
});

test('test queue-from-2-stacks: pushing works on dequeue', () => {
    let stack1 = new Stack(),
        stack2 = new Stack(),
        q = new Queue2(stack1, stack2);
        expect(q.peek()).toEqual([]);
        q.enqueue(1);
        expect(q.peek()).toEqual([1]);
        q.enqueue(3);
        expect(q.dequeue()).toEqual(1);
        expect(q.peek()).toEqual([3]);
        expect(q.dequeue()).toEqual(3);
        expect(q.peek()).toEqual([]);
});
