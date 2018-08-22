const {Linklist, } = require('./index.js');
// put your tests here]

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
