const {Linklist, Node} = require('./index.js');
// put your tests here]

describe('Node: Test Node that its next is empty', ()  =>  {
    let node = new Node(5);
    test('test Node Type', () => {
        expect(typeof node).toEqual('object');
    });
    test('test Node data', () => {
        expect(node.data).toEqual(5);
    }); 
    test('test Node next', () => {
        expect(node.next).toEqual(undefined);
    }); 
});


describe('Node: Test Node that its next is not empty', ()  =>  {
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

describe('Linklist: test constructor with no argument', ()   =>  {
    let linklist = new Linklist();
    test('test Linklist type', () => {
        expect(typeof linklist).toEqual('object');
    }); 

    test('test Linklist head', () => {
        expect(linklist.getHead()).toEqual(undefined);
    });
    test('test Linklist size', () => {
        expect(linklist.getSize()).toEqual(0);
    }); 
});

describe('Linklist: test constructor with a node', ()   =>  {
    let node = new Node(5),
        linklist = new Linklist(node);
    test('test Linklist type', () => {
        expect(typeof linklist).toEqual('object');
    }); 

    test('test Linklist head', () => {
        expect(linklist.getHead()).toEqual(node);
    }); 

    test('test Linklist size', () => {
        expect(linklist.getSize()).toEqual(1);
    }); 
});


describe('Linklist: test insert at head', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();
    linklist.insertAtHead(node1);
    test('test insert at head: empty link list', () => {
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(1);
    });

    linklist.insertAtHead(node2);
    test('test insert at head: empty link list', () => {
        expect(linklist.getHead()).toEqual(node2);
        expect(linklist.getSize()).toEqual(2);
    });

    linklist.insertAtHead(node3);
    test('test insert at head: empty link list', () => {
        expect(linklist.getHead()).toEqual(node3);
        expect(linklist.getSize()).toEqual(3);
    });
});


describe('Linklist: test remove at head', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();
    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('test remove at head: not empty link list', () => {
        expect(linklist.removeAtHead()).toEqual(node3);
        expect(linklist.removeAtHead()).toEqual(node2);
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(1);
        expect(linklist.removeAtHead()).toEqual(node1);
        expect(linklist.getHead()).toEqual(undefined);
        expect(linklist.getSize()).toEqual(0);
    });

    // create an empty link list
    let emptyLinklist = new Linklist();
    test('test remove at head: empty link list', () => {
        expect(emptyLinklist.removeAtHead()).toEqual(undefined);
        expect(emptyLinklist.getHead()).toEqual(undefined);
        expect(emptyLinklist.getSize()).toEqual(0);
    });
});


describe('Linklist: test insert at tail', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();
    linklist.insertAtTail(node1);
    test('test insert at tail: empty link list', () => {
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(1);
    });

    linklist.insertAtTail(node2);
    test('test insert at tail: empty link list', () => {
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(2);
    });

    linklist.insertAtTail(node3);
    test('test insert at tail: empty link list', () => {
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(3);
    });
});


describe('Linklist: test remove at tail', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();
    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('test remove at tail: not empty link list', () => {
        expect(linklist.removeAtTail()).toEqual(node1);
        expect(linklist.removeAtTail()).toEqual(node2);
        expect(linklist.getHead()).toEqual(node3);
        expect(linklist.getSize()).toEqual(1);
        expect(linklist.removeAtTail()).toEqual(node3);
        expect(linklist.getHead()).toEqual(undefined);
        expect(linklist.getSize()).toEqual(0);
    });

    // create an empty link list
    let emptyLinklist = new Linklist();
    test('test remove at tail: empty link list', () => {
        expect(emptyLinklist.removeAtTail()).toEqual(undefined);
        expect(emptyLinklist.getHead()).toEqual(undefined);
        expect(emptyLinklist.getSize()).toEqual(0);
    });
});


describe('Linklist: test insert at a particular position', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();

    test('test insert at position 0 (head)', () => {
        expect(linklist.insertAt(0, node1)).toEqual(true);
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(1);
    });

    test('test insert at invalid position', () => {
        expect(linklist.insertAt(3, node2)).toEqual(false);
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(3);
    });

    test('test insert at invalid position', () => {
        expect(linklist.insertAt(1, node2)).toEqual(true)
        expect(linklist.insertAt(2, node3)).toEqual(true);
        expect(linklist.getHead()).toEqual(node1);
        expect(linklist.getSize()).toEqual(3);
    });
});


describe('Linklist: test remove at a particular position', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();
    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);
    test('remove at a normal index', () => {
        expect(linklist.removeAt(1)).toEqual(node2);
        expect(linklist.getSize()).toEqual(2);
    });
    test('remove at at tail', () => {
        expect(linklist.removeAt(1)).toEqual(node1);
        expect(linklist.getSize()).toEqual(1);
    });
    test('remove at head', () => {
        expect(linklist.removeAt(0)).toEqual(node3);
        expect(linklist.getSize()).toEqual(0);
    });
});

describe('Linklist: test getHead', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();

    test('empty list', () => {
        expect(linklist.getHead()).toEqual(undefined);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('not empty list', () => {
        expect(linklist.getHead()).toEqual(node3);
    });
});


describe('Linklist: test getTail', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();

    test('empty list', () => {
        expect(linklist.getTail()).toEqual(undefined);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('not empty list', () => {
        expect(linklist.getTail()).toEqual(node1);
    });
});

describe('Linklist: test getElementAt', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();

    test('empty list', () => {
        expect(linklist.getElementAt(0)).toEqual(undefined);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('invalid index', () => {
        expect(linklist.getElementAt(5)).toEqual(undefined);
    });
    
    test('valid index', () => {
        expect(linklist.getElementAt(1)).toEqual(node2);
    });
});

describe('Linklist: test traverse', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();

    test('empty list', () => {
        expect(linklist.traverse()).toEqual([]);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('not empty list', () => {
        expect(linklist.traverse()).toEqual([node3, node2, node1]);
    });
});

describe('Linklist: test getSize', ()   =>  {
    test('test Linklist size', () => {
        let node1 = new Node(1),
        node2 = new Node(2, node1),
        node3 = new Node(3, node2),
        linklist = new Linklist(node3);
        expect(linklist.getSize()).toEqual(3);
    }); 

    test('test Linklist: empty linklist', () => {
        let linklist = new Linklist();
        expect(linklist.getSize()).toEqual(0);
    }); 
});

describe('Linklist: test isEmpty', ()   =>  {
    test('test Linklist not empty', () => {
        let node1 = new Node(1),
        node2 = new Node(2, node1),
        node3 = new Node(3, node2),
        linklist = new Linklist(node3);
        expect(linklist.isEmpty()).toEqual(false);
    }); 

    test('test Linklist: empty linklist', () => {
        let linklist = new Linklist();
        expect(linklist.isEmpty()).toEqual(true);
    }); 
});

describe('Linklist: test clear', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist();
    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);
    linklist.clear();
    test('clear list', () => {
        expect(linklist.getSize()).toEqual(0);
        expect(linklist.isEmpty()).toEqual(true);
    });
});
