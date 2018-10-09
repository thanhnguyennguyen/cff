const find = require('./index.js');

const arr = [5, 6, 7, 8, 9, 100, 1, 2, 3, 4];
// put your tests here

describe('test solution 2', () =>{
    test('find the first element', () => {
        expect(find(arr, 5)).toEqual(0);
    });
    
    test('find the last element', () => {
        expect(find(arr, 4)).toEqual(9);
    });
    
    test('find the any element', () => {
        expect(find(arr, 7)).toEqual(2);
    });
    
    test('404 not found', () => {
        expect(find(arr, 0)).toEqual(-1);
        expect(find(arr, 10)).toEqual(-1);
        expect(find(arr, 12)).toEqual(-1);
    });
});
