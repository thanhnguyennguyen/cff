const weave = require('./index.js');
const Queue = require('../queue-implementation/index')
// put your tests here
test('template weave: q1.length === q2.length', () => {
    let q1 = new Queue(),
        q2 = new Queue();
    q1.enqueue(1);
    q1.enqueue(2);
    q2.enqueue('Hi');
    q2.enqueue('there!');

    expect(weave(q1, q2).peek()).toEqual(["there!", 2, "Hi", 1]);
});

test('template weave: q1.length > q2.length', () => {
    let q1 = new Queue(),
        q2 = new Queue();
    q1.enqueue(1);
    q1.enqueue(2);
    q1.enqueue(3);
    q1.enqueue(4);
    q2.enqueue('Hi');
    q2.enqueue('there!');

    expect(weave(q1, q2).peek()).toEqual([4, 3, "there!", 2, "Hi", 1]);
});


test('template weave: q1.length < q2.length', () => {
    let q1 = new Queue(),
        q2 = new Queue();
    q1.enqueue(1);
    q1.enqueue(2);
    q2.enqueue('Hi');
    q2.enqueue('there!');
    q2.enqueue('I\'m');
    q2.enqueue('Nguyen');

    expect(weave(q1, q2).peek()).toEqual(['Nguyen', 'I\'m', "there!", 2, "Hi", 1]);
});