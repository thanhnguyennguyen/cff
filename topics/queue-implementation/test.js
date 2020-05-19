const Queue = require('./index');
// put your tests here
test('Queue test', () => {
    let q = new Queue();
    expect(q.peek()).toEqual([]);
    q.enqueue(1);
    expect(q.peek()).toEqual([1]);
    q.enqueue(3);
    expect(q.peek()).toEqual([3, 1]);
    q.dequeue();
    expect(q.peek()).toEqual([3]);
    q.dequeue();
    expect(q.peek()).toEqual([]);

});