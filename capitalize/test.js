const {capitalize, capitalize2} = require('./index.js');
// put your tests here
test('test capitalize: normal case', () => {
    expect(capitalize('nguyen thanh nguyen')).toEqual('Nguyen Thanh Nguyen');
});

test('test capitalize: empty string', () => {
    expect(capitalize('')).toEqual('');
});

test('test capitalize: one-word string', () => {
    expect(capitalize('test')).toEqual('Test');
});

test('test capitalize: special character', () => {
    expect(capitalize('hey! i\'m here!')).toEqual('Hey! I\'m Here!');
});

test('test capitalize: test number', () => {
    expect(capitalize('hey! 123 n')).toEqual('Hey! 123 N');
});

test('test capitalize: test 2 space', () => {
    expect(capitalize('hey!  123')).toEqual('Hey!  123');
});

// test solution 2
test('test capitalize2: normal case', () => {
    expect(capitalize2('nguyen thanh nguyen')).toEqual('Nguyen Thanh Nguyen');
});

test('test capitalize2: empty string', () => {
    expect(capitalize2('')).toEqual('');
});

test('test capitalize2: one-word string', () => {
    expect(capitalize2('test')).toEqual('Test');
});

test('test capitalize2: special character', () => {
    expect(capitalize2('hey! i\'m here!')).toEqual('Hey! I\'m Here!');
});

test('test capitalize2: test number', () => {
    expect(capitalize2('hey! 123 n')).toEqual('Hey! 123 N');
});

test('test capitalize2: test 2 space', () => {
    expect(capitalize2('hey!  123')).toEqual('Hey!  123');
});