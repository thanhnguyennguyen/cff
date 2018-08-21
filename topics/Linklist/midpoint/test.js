const midpoint = require('./index.js');
const {Linklist, Node} = require('../index.js');
// put your tests here]

test('test invalid input', () => {
    expect(midpoint('abc')).toEqual(null);
});

test('test empty list', () => {
    expect(midpoint(new Linklist())).toEqual(null);
});

test('test list which has only one node', () => {
    let list = new Linklist();
    list.insertAtHead(1);
    expect(midpoint(list).data).toEqual(1);
});


test('test list which has 2 nodes', () => {
    let list = new Linklist();
    list.insertAtTail(1);
    list.insertAtTail(2);
    expect(midpoint(list).data).toEqual(1);
});


test('test list which has 3 nodes', () => {
    let list = new Linklist();
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    expect(midpoint(list).data).toEqual(2);
});

test('test list which has 4 nodes', () => {
    let list = new Linklist();
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);
    expect(midpoint(list).data).toEqual(2);
});