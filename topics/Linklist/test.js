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
        expect(node.next).toEqual(null);
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
        expect(linklist.getHead()).toEqual(null);
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
    linklist = new Linklist();
    test('test insert at head: empty link list', () => {
        linklist.insertAtHead(node1);
        expect(linklist.getHead().data).toEqual(node1.data);
        expect(linklist.getSize()).toEqual(1);
    });

    let linklist1 = new Linklist();
    test('test insert at head: not empty link list', () => {
        linklist1.insertAtHead(node1);
        linklist1.insertAtHead(node2);
        expect(linklist1.getHead().data).toEqual(node2.data);
        expect(linklist1.getSize()).toEqual(2);
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
        expect(linklist.removeAtHead().data).toEqual(node3.data);
        expect(linklist.removeAtHead().data).toEqual(node2.data);
        expect(linklist.getHead().data).toEqual(node1.data);
        expect(linklist.getSize()).toEqual(1);
        expect(linklist.removeAtHead().data).toEqual(node1.data);
        expect(linklist.getHead()).toEqual(null);
        expect(linklist.getSize()).toEqual(0);
    });

    // create an empty link list
    let emptyLinklist = new Linklist();
    test('test remove at head: empty link list', () => {
        expect(emptyLinklist.removeAtHead()).toEqual(null);
        expect(emptyLinklist.getHead()).toEqual(null);
        expect(emptyLinklist.getSize()).toEqual(0);
    });
});


describe('Linklist: test insert at tail', ()   =>  {
    let node1 = new Node(1),
        node2 = new Node(2),
        node3 = new Node(3),
    linklist = new Linklist(),
    linklist1 = new Linklist();
    linklist.insertAtTail(node1);
    test('test insert at tail: empty link list', () => {
        expect(linklist.getHead().data).toEqual(node1.data);
        expect(linklist.getSize()).toEqual(1);
    });

    linklist1.insertAtTail(node1);
    linklist1.insertAtTail(node2);
    linklist1.insertAtTail(node3);
    test('test insert at tail: not empty link list', () => {
        expect(linklist1.getHead().data).toEqual(node1.data);
        expect(linklist1.getSize()).toEqual(3);
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
        expect(linklist.removeAtTail().data).toEqual(node1.data);
        expect(linklist.getSize()).toEqual(2);
        expect(linklist.removeAtTail().data).toEqual(node2.data);
        expect(linklist.getHead().data).toEqual(node3.data);
        expect(linklist.getSize()).toEqual(1);
        expect(linklist.removeAtTail().data).toEqual(node3.data);
        expect(linklist.getHead()).toEqual(null);
        expect(linklist.getSize()).toEqual(0);
    });

    // create an empty link list
    let emptyLinklist = new Linklist();
    test('test remove at tail: empty link list', () => {
        expect(emptyLinklist.removeAtTail()).toEqual(null);
        expect(emptyLinklist.getHead()).toEqual(null);
        expect(emptyLinklist.getSize()).toEqual(0);
    });
});


describe('Linklist: test insert at a particular position', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist1 = new Linklist(),
    linklist2 = new Linklist(),
    linklist3 = new Linklist();

    test('test insert at position 0 (head)', () => {
        expect(linklist1.insertAt(0, node1)).toEqual(true);
        expect(linklist1.getHead().data).toEqual(node1.data);
        expect(linklist1.getSize()).toEqual(1);
    });

    test('test insert at invalid position', () => {
        expect(linklist2.insertAt(0, node1)).toEqual(true);
        expect(linklist2.insertAt(3, node2)).toEqual(false);
        expect(linklist2.getHead().data).toEqual(node1.data);
        expect(linklist2.getSize()).toEqual(1);
    });

    test('test insert at invalid position', () => {
        
        expect(linklist3.insertAt(0, node1)).toEqual(true);
        expect(linklist2.insertAt(3, node2)).toEqual(false);
        expect(linklist3.insertAt(1, node2)).toEqual(true)
        expect(linklist3.insertAt(2, node3)).toEqual(true);
        expect(linklist3.getHead().data).toEqual(node1.data);
        expect(linklist3.getSize()).toEqual(3);
    });
});


describe('Linklist: test remove at a particular position', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    node4 = new Node(4),
    linklist1 = new Linklist(),
    linklist2 = new Linklist(),
    linklist3 = new Linklist(),
    linklist4 = new Linklist();

    linklist1.insertAtHead(node1);
    linklist1.insertAtHead(node2);
    linklist1.insertAtHead(node3);
    linklist1.insertAtHead(node4);


    test('remove at a normal index', () => {
        expect(linklist1.removeAt(2).data).toEqual(node2.data);
        expect(linklist1.getSize()).toEqual(3);
    });

    linklist2.insertAtHead(node1);
    linklist2.insertAtHead(node2);
    linklist2.insertAtHead(node3);
    linklist2.insertAtHead(node4);
    test('remove at at tail', () => {
        expect(linklist2.removeAt(3).data).toEqual(node1.data);
        expect(linklist2.getSize()).toEqual(3);
    });

    linklist3.insertAtHead(node1);
    linklist3.insertAtHead(node2);
    linklist3.insertAtHead(node3);
    test('remove at head', () => {
        expect(linklist3.removeAt(0).data).toEqual(node3.data);
        expect(linklist3.getSize()).toEqual(2);
    });

    
    linklist4.insertAtHead(node1);
    linklist4.insertAtHead(node2);
    linklist4.insertAtHead(node3);
    test('remove at head', () => {
        expect(linklist4.removeAt(10)).toEqual(null);
        expect(linklist4.getSize()).toEqual(3);
    });
});

describe('Linklist: test getHead', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist(),
    emptylist = new Linklist()

    test('empty list', () => {
        expect(emptylist.getHead()).toEqual(null);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('not empty list', () => {
        expect(linklist.getHead().data).toEqual(node3.data);
    });
});


describe('Linklist: test getTail', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist(),
    emptylist = new Linklist();

    test('empty list', () => {
        expect(emptylist.getTail()).toEqual(null);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('not empty list', () => {
        expect(linklist.getTail().data).toEqual(node1.data);
    });
});

describe('Linklist: test getElementAt', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist(),
    emptylist = new Linklist();

    test('empty list', () => {
        expect(emptylist.getElementAt(0)).toEqual(null);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('invalid index', () => {
        expect(linklist.getElementAt(5)).toEqual(null);
    });
    
    test('valid index', () => {
        expect(linklist.getElementAt(1).data).toEqual(node2.data);
    });
});

describe('Linklist: test traverse', ()   =>  {
    let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    linklist = new Linklist(),
    emptylist = new Linklist();

    test('empty list', () => {
        expect(emptylist.traverse()).toEqual([]);
    });

    linklist.insertAtHead(node1);
    linklist.insertAtHead(node2);
    linklist.insertAtHead(node3);

    test('not empty list', () => {
        expect(linklist.traverse()).toEqual([node3.data, node2.data, node1.data]);
    });
});

describe('Linklist: test getSize', ()   =>  {
    test('test Linklist size', () => {
        let node1 = new Node(1),
        node2 = new Node(2),
        node3 = new Node(3),
        linklist = new Linklist(node1);
        linklist.insertAtHead(node2);
        linklist.insertAtHead(node3);
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
        node2 = new Node(2),
        node3 = new Node(3),
        linklist = new Linklist(node1);
        linklist.insertAtHead(node2);
        linklist.insertAtHead(node3);
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
