const pyramid = require('./index.js');
// put your tests here
test('test pyramid: test some invalid inputs ', () => {
    expect(pyramid(-1)).toEqual([]);
    expect(pyramid(0)).toEqual([]);
});

test('test pyramid: some valid inputs ', () => {
    expect(pyramid(1)).toEqual(['#']);
    expect(pyramid(2)).toEqual([' # ', '###']);
    expect(pyramid(3)).toEqual(['  #  ', ' ### ', '#####']);
});