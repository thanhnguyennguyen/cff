const {find1, find2} = require('./index.js');

const arr = [5, 6, 7, 8, 9, 100, 1, 2, 3, 4];
// put your tests here

describe('test solution 2', () =>{
    test('find the first element', () => {
        expect(find2(arr, 5)).toEqual(0);
    });
    
    test('find the last element', () => {
        expect(find2(arr, 4)).toEqual(9);
    });
    
    test('find the any element', () => {
        expect(find2(arr, 7)).toEqual(2);
    });
    
    test('404 not found', () => {
        expect(find2(arr, 0)).toEqual(-1);
        expect(find2(arr, 10)).toEqual(-1);
        expect(find2(arr, 12)).toEqual(-1);
    });
});
