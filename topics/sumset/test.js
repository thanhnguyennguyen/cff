const findOneSubset = require('./index.js');
// put your tests here

const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test('test sumset', () => {
   expect(findOneSubset(l, 3, 8)).toEqual([1, 2, 5]);
   expect(findOneSubset(l, 3, 9)).toEqual([1, 2, 6]);
   expect(findOneSubset(l, 3, 100)).toEqual([]);
});
