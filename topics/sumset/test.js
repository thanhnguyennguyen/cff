const {
    findOneSubset,
    findAllSubsets
} = require('./index.js');
// put your tests here

const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test('test findOneSubset', () => {
    expect(findOneSubset(l, 3, 8)).toEqual([1, 2, 5]);
    expect(findOneSubset(l, 3, 9)).toEqual([1, 2, 6]);
    expect(findOneSubset(l, 3, 100)).toEqual([]);
    expect(findOneSubset(l, 3, 0)).toEqual([]);
});


test('test findAllSubsets', () => {
    expect(findAllSubsets(l, 3, 8)).toEqual([
        [1, 2, 5],
        [1, 3, 4]
    ]);
    expect(findAllSubsets(l, 3, 9)).toEqual([
        [1, 2, 6],
        [1, 3, 5],
        [2, 3, 4]
    ]);
    expect(findAllSubsets(l, 3, 100)).toEqual([]);
    expect(findAllSubsets(l, 3, 0)).toEqual([]);
});