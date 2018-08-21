const isCircular = require('./index.js');
const {Linklist, Node} = require('../index.js');
// put your tests here]


describe('Linklist is circular: Solution1 with size', () => {
    test(' test empty list', () => {
        expect(isCircular(new Linklist())).toEqual(false);
    });
    
    test(' test list which has only one node', () => {
        let list = new Linklist();
        list.insertAtHead(1);
        expect(isCircular(list)).toEqual(false);
    });
    
    
    test('test list which has 2 nodes, not circular', () => {
        let list = new Linklist();
        list.insertAtTail(1);
        list.insertAtTail(2);
        expect(isCircular(list)).toEqual(false);
    });
    
    test(' test list which has 3 nodes, circular', () => {
        let list = new Linklist();
        list.insertAtTail(1);
        list.insertAtTail(2);
        list.insertAtTail(3);
        let node2 = list.getElementAt(1),
            node3 = list.getElementAt(2);
            node3.next = node2;
        expect(isCircular(list)).toEqual(true);
    });
    
});