const NGE = require('./index.js');
// put your tests here
test('test NGE using stack', () => {
    expect(NGE([4, 5, 2, 25])).toEqual({
        4: 5,
        5: 25,
        2: 25,
        25: -1
    });
    expect(NGE([13, 7, 6, 12])).toEqual({
        13: -1,
        7: 12,
        6: 12,
        12: -1
    })
});