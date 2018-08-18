const capitalize = require('./index.js');
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