const {Node, Tree} = require('./index.js');
// put your tests here
let node, tree, arr;
beforeEach(() => {
    node = new Node(1);
    node.add(2);
        // node 2 has 2 children: 4, 5
        node.children[0].add(4);
            // node 4 has one child: 6
            node.children[0].children[0] = 6;
        node.children[0].add(5);
    node.add(3);
        // node 3 has one child: 7 
        node.children[1] = 7
    tree = new Tree();
    tree.root = node;

    arr = [];
});
const pushToArray = (e) => {
    arr.push(e);
}

describe('Tree: test method of tree', () => {
    test('test constructor', () => {
        expect(tree.root.data).toEqual(1);
        expect(tree.children.length).toEqual(2);
        expect(tree.children[0].children.length).toEqual(2);
        expect(tree.children[1].children.length).toEqual(1);
    });

    test('test BFS', () => {
        tree.BFS(pushToArray);
        expect(arr).toEqual([1, 2, 3, 4, 5, 7, 6]);
    });

    test('test DFS', () => {
        tree.DFS(pushToArray);
        expect(arr).toEqual([1, 2, 4, 6, 5, 3, 7]);
    });
});
