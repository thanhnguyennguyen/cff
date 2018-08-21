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

describe('Linklist: test insert at head', ()   =>  {
    let linklist = new Linklist();
    test('test insert at head: empty link list', () => {
        linklist.insertAtHead(1);
        expect(linklist.getHead().data).toEqual(1);
        expect(linklist.getSize()).toEqual(1);
    });

    let linklist1 = new Linklist();
    test('test insert at head: not empty link list', () => {
        linklist1.insertAtHead(1);
        linklist1.insertAtHead(2);
        expect(linklist1.getHead().data).toEqual(2);
        expect(linklist1.getSize()).toEqual(2);
    });
});


describe('Linklist: test remove at head', ()   =>  {
    let linklist = new Linklist();
    linklist.insertAtHead(1);
    linklist.insertAtHead(2);
    linklist.insertAtHead(3);

    test('test remove at head: not empty link list', () => {
        expect(linklist.removeAtHead()).toEqual(3);
        expect(linklist.removeAtHead()).toEqual(2);
        expect(linklist.getHead().data).toEqual(1);
        expect(linklist.getSize()).toEqual(1);
        expect(linklist.removeAtHead()).toEqual(1);
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
    let linklist = new Linklist(),
    linklist1 = new Linklist();
    linklist.insertAtTail(1);
    test('test insert at tail: empty link list', () => {
        expect(linklist.getHead().data).toEqual(1);
        expect(linklist.getSize()).toEqual(1);
    });

    linklist1.insertAtTail(1);
    linklist1.insertAtTail(2);
    linklist1.insertAtTail(3);
    test('test insert at tail: not empty link list', () => {
        expect(linklist1.getHead().data).toEqual(1);
        expect(linklist1.getSize()).toEqual(3);
    });
});


describe('Linklist: test remove at tail', ()   =>  {
    let linklist = new Linklist();
    linklist.insertAtHead(1);
    linklist.insertAtHead(2);
    linklist.insertAtHead(3);

    test('test remove at tail: not empty link list', () => {
        expect(linklist.removeAtTail()).toEqual(1);
        expect(linklist.getSize()).toEqual(2);
        expect(linklist.removeAtTail()).toEqual(2);
        expect(linklist.getHead().data).toEqual(3);
        expect(linklist.getSize()).toEqual(1);
        expect(linklist.removeAtTail()).toEqual(3);
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
    let linklist1 = new Linklist(),
    linklist2 = new Linklist(),
    linklist3 = new Linklist();

    test('test insert at position 0 (head)', () => {
        expect(linklist1.insertAt(0, 1)).toEqual(true);
        expect(linklist1.getHead().data).toEqual(1);
        expect(linklist1.getSize()).toEqual(1);
    });

    test('test insert at invalid position', () => {
        expect(linklist2.insertAt(0, 1)).toEqual(true);
        expect(linklist2.insertAt(3, 2)).toEqual(false);
        expect(linklist2.getHead().data).toEqual(1);
        expect(linklist2.getSize()).toEqual(1);
    });

    test('test insert at invalid position', () => {
        
        expect(linklist3.insertAt(0, 1)).toEqual(true);
        expect(linklist2.insertAt(3, 2)).toEqual(false);
        expect(linklist3.insertAt(1, 2)).toEqual(true)
        expect(linklist3.insertAt(2, 3)).toEqual(true);
        expect(linklist3.getHead().data).toEqual(1);
        expect(linklist3.getSize()).toEqual(3);
    });
});


describe('Linklist: test remove at a particular position', ()   =>  {
    let linklist1 = new Linklist(),
    linklist2 = new Linklist(),
    linklist3 = new Linklist(),
    linklist4 = new Linklist();

    linklist1.insertAtHead(1);
    linklist1.insertAtHead(2);
    linklist1.insertAtHead(3);
    linklist1.insertAtHead(4);


    test('remove at a normal index', () => {
        expect(linklist1.removeAt(2)).toEqual(2);
        expect(linklist1.getSize()).toEqual(3);
    });

    linklist2.insertAtHead(1);
    linklist2.insertAtHead(2);
    linklist2.insertAtHead(3);
    linklist2.insertAtHead(4);
    test('remove at at tail', () => {
        expect(linklist2.removeAt(3)).toEqual(1);
        expect(linklist2.getSize()).toEqual(3);
    });

    linklist3.insertAtHead(1);
    linklist3.insertAtHead(2);
    linklist3.insertAtHead(3);
    test('remove at head', () => {
        expect(linklist3.removeAt(0)).toEqual(3);
        expect(linklist3.getSize()).toEqual(2);
    });

    
    linklist4.insertAtHead(1);
    linklist4.insertAtHead(2);
    linklist4.insertAtHead(3);
    test('remove at head', () => {
        expect(linklist4.removeAt(10)).toEqual(null);
        expect(linklist4.getSize()).toEqual(3);
    });
});

describe('Linklist: test getHead', ()   =>  {
    let linklist = new Linklist(),
    emptylist = new Linklist()

    test('empty list', () => {
        expect(emptylist.getHead()).toEqual(null);
    });

    linklist.insertAtHead(1);
    linklist.insertAtHead(2);
    linklist.insertAtHead(3);

    test('not empty list', () => {
        expect(linklist.getHead().data).toEqual(3);
    });
});


describe('Linklist: test getTail', ()   =>  {
    let linklist = new Linklist(),
    emptylist = new Linklist();

    test('empty list', () => {
        expect(emptylist.getTail()).toEqual(null);
    });

    linklist.insertAtHead(1);
    linklist.insertAtHead(2);
    linklist.insertAtHead(3);

    test('not empty list', () => {
        expect(linklist.getTail().data).toEqual(1);
    });
});

describe('Linklist: test getElementAt', ()   =>  {
    let linklist = new Linklist(),
    emptylist = new Linklist();

    test('empty list', () => {
        expect(emptylist.getElementAt(0)).toEqual(null);
    });

    linklist.insertAtHead(1);
    linklist.insertAtHead(2);
    linklist.insertAtHead(3);

    test('invalid index', () => {
        expect(linklist.getElementAt(5)).toEqual(null);
    });
    
    test('valid index', () => {
        expect(linklist.getElementAt(1).data).toEqual(2);
    });
});

describe('Linklist: test traverse', ()   =>  {
    let linklist = new Linklist(),
    emptylist = new Linklist();

    test('empty list', () => {
        expect(emptylist.traverse()).toEqual([]);
    });

    linklist.insertAtHead(1);
    linklist.insertAtHead(2);
    linklist.insertAtHead(3);

    test('not empty list', () => {
        expect(linklist.traverse()).toEqual([3, 2, 1]);
    });
});

describe('Linklist: test getSize', ()   =>  {
    test('test Linklist size', () => {
        let linklist = new Linklist();
        linklist.insertAtHead(1);
        linklist.insertAtHead(2);
        linklist.insertAtHead(3);
        expect(linklist.getSize()).toEqual(3);
    }); 

    test('test Linklist: empty linklist', () => {
        let linklist = new Linklist();
        expect(linklist.getSize()).toEqual(0);
    }); 
});

describe('Linklist: test isEmpty', ()   =>  {
    test('test Linklist not empty', () => {
        let linklist = new Linklist();
        linklist.insertAtHead(1);
        linklist.insertAtHead(2);
        linklist.insertAtHead(3);
        expect(linklist.isEmpty()).toEqual(false);
    }); 

    test('test Linklist: empty linklist', () => {
        let linklist = new Linklist();
        expect(linklist.isEmpty()).toEqual(true);
    }); 
});

describe('Linklist: test clear', ()   =>  {
    let linklist = new Linklist();
    linklist.insertAtHead(1);
    linklist.insertAtHead(2);
    linklist.insertAtHead(3);
    linklist.clear();
    test('clear list', () => {
        expect(linklist.getSize()).toEqual(0);
        expect(linklist.isEmpty()).toEqual(true);
    });
});
