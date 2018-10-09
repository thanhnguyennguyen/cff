const find = require('./index.js');

const arr = [5, 6, 7, 8, 9, 100, 1, 2, 3, 4];
// put your tests here
test('find the first element', () => {
    expect(find(5)).toEqual(0);
});

test('find the last element', () => {
    expect(find(4)).toEqual(9);
});

test('find the any element', () => {
    expect(find(7)).toEqual(2);
});

test('404 not found', () => {
    expect(find(0)).toEqual(-1);
    expect(find(10)).toEqual(-1);
    expect(find(12)).toEqual(-1);
});