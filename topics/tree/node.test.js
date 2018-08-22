const {Node, } = require('./index.js');
// put your tests here
describe('Tree node: constructor test', () => {
    test('test constructor with number', () => {
        let node = new Node(123);
        expect(node.data).toEqual(123);
    });

    test('test constructor with string', () => {
        let node = new Node('testtree');
        expect(node.data).toEqual('testtree');
    });

    test('test constructor with array', () => {
        let node = new Node([1, 2, 3]);
        expect(node.data).toEqual([1, 2, 3]);
    });

    test('test constructor with no argument', () => {
        let node = new Node();
        expect(node.data).toEqual(null);
    });
});

describe('Tree node: test add method', () => {
    test('test add method with number', () => {
        let node = new Node(123);
        node.add(456);
        expect(node.data).toEqual(123);
        expect(node.children[0].data).toEqual(456);
    });

    test('test add method with string', () => {
        let node = new Node('test1');
        node.add('test2');
        expect(node.data).toEqual('test1');
        expect(node.children[0].data).toEqual('test2');
    });

    test('test add method with array', () => {
        let node = new Node([1, 2, 3]);
        node.add([4, 5, 6]);
        expect(node.data).toEqual([1, 2, 3]);
        expect(node.children[0].data).toEqual([4, 5, 6]);
    });
});
describe('Tree node: test remove method', () => {
    test('test remove method with number', () => {
        let node = new Node(123);
        node.add(456);
        node.add(789);
        expect(node.data).toEqual(123);
        node.remove(456);
        expect(node.children[0].data).toEqual(789);
    });

    test('test remove method with string', () => {
        let node = new Node('test1');
        node.add('test2');
        node.add('test3');
        expect(node.data).toEqual('test1');
        node.remove('test2');
        expect(node.children[0].data).toEqual('test3');
    });

    test('test remove method with array', () => {
        let node = new Node([1, 2, 3]);
        node.add([4, 5, 6]);
        node.add([7, 8, 9]);
        expect(node.data).toEqual([1, 2, 3]);
        node.remove([4, 5, 6]);
        expect(node.children[0].data).toEqual([7, 8, 9]);
    });
});
