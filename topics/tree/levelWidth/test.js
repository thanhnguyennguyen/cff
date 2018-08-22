const levelWidth = require('./index.js');
const {Node, } = require('../index.js');
// put your tests here
test('Tree: LevelWidth test', () => {
    let node = new Node(1);
    node.add(2);
        // node 2 has 2 children: 4, 5
        node.children[0].add(4);
            // node 4 has one child: 6
            node.children[0].children[0].add(6);
        node.children[0].add(5);
    node.add(3);
        // node 3 has one child: 7 
        node.children[1].add(7);
    
    expect(levelWidth(node)).toEqual([1, 2, 3, 1]);
});