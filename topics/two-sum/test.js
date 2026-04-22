const two_sum = require('./index.js');
// put your tests here
test('test two_sum', () => {
    expect(two_sum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(two_sum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(two_sum([3, 3], 6)).toEqual([0, 1]);
    expect(two_sum([2, 5, 5, 11], 10)).toEqual([1, 2]);
});
