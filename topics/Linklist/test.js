const {
    Linklist,
} = require('./index.js');
// put your tests here

describe('Linklist: test getHead', () => {
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


describe('Linklist: test getTail', () => {
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

describe('Linklist: test getElementAt', () => {
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