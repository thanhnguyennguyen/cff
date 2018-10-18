const maxDistance = require('./index.js');
// put your tests here
test('test distance', () => {
    expect(maxDistance([1, 5, 2, 8, 10, 3])).toEqual(9);
    expect(maxDistance([1])).toEqual(-1);
    expect(maxDistance([1, 5])).toEqual(4);
    expect(maxDistance([5, 2])).toEqual(-1);
});
