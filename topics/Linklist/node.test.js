const {
    Linklist,
    Node
} = require('./index.js');
// put your tests here]

describe('Node: Test Node that its next is empty', () => {
    let node = new Node(5);
    test('test Node Type', () => {
        expect(typeof node).toEqual('object');
    });
    test('test Node data', () => {
        expect(node.data).toEqual(5);
    });
    test('test Node next', () => {
        expect(node.next).toEqual(null);
    });
});


describe('Node: Test Node that its next is not empty', () => {
    let node1 = new Node(6),
        node2 = new Node(5, node1);

    test('test Node Type', () => {
        expect(typeof node2).toEqual('object');
    });
    test('test Node data', () => {
        expect(node2.data).toEqual(5);
    });
    test('test Node next', () => {
        expect(node2.next).toEqual(node1);
    });
});