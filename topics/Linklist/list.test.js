const {Linklist, } = require('./index.js');
// put your tests here]

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
