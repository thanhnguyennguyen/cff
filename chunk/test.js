const chunk = require('./index.js');
// put your tests here
test('test chunk', () => {
    expect(chunk([1, 2, 3, 4, 5], 0)).toEqual([[1, 2, 3, 4, 5]]);
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
});
