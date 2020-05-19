const {
    Linklist,
} = require('./index.js');
// put your tests here]

describe('Linklist: test insert at head', () => {
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

describe('Linklist: test insert at tail', () => {
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

describe('Linklist: test insert at a particular position', () => {
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