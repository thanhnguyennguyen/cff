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
    let node2 = new Node(6),
    node1 = new Node(5, node2);

    test('test Node Type', () => {
        expect(typeof node1).toEqual('object');
    });
    test('test Node data', () => {
        expect(node1.data).toEqual(5);
    }); 
    test('test Node next', () => {
        expect(node1.next).toEqual(node2);
    }); 
});

describe('Linklist: test getSize', ()   =>  {

});

describe('Linklist: test insert at head', ()   =>  {
    
});


describe('Linklist: test remove at head', ()   =>  {
    
});


describe('Linklist: test insert at tail', ()   =>  {
    
});


describe('Linklist: test remove at tail', ()   =>  {
    
});


describe('Linklist: test insert at a particular position', ()   =>  {
    
});


describe('Linklist: test remove at a particular position', ()   =>  {
    
});

describe('Linklist: test getFirst', ()   =>  {
    
});


describe('Linklist: test getLast', ()   =>  {
    
});

describe('Linklist: test getElementIndex', ()   =>  {
    
});

describe('Linklist: test traverse', ()   =>  {
    
});

describe('Linklist: test clear', ()   =>  {
    
});
