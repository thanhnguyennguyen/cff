const {pyramid, pyramid2} = require('./index.js');
// put your tests here
test('test pyramid (Iteration solution): test some invalid inputs ', () => {
    expect(pyramid(-1)).toEqual([]);
    expect(pyramid(0)).toEqual([]);
});

test('test pyramid (Iteration solution): some valid inputs ', () => {
    expect(pyramid(1)).toEqual(['#']);
    expect(pyramid(2)).toEqual([' # ', '###']);
    expect(pyramid(3)).toEqual(['  #  ', ' ### ', '#####']);
});

test('test pyramid (Recursive solution): test some invalid inputs ', () => {
    expect(pyramid2(-1)).toEqual([]);
    expect(pyramid2(0)).toEqual([]);
});

test('test pyramid (Recursive solution): some valid inputs ', () => {
    expect(pyramid2(1)).toEqual(['#']);
    expect(pyramid2(2)).toEqual([' # ', '###']);
    expect(pyramid2(3)).toEqual(['  #  ', ' ### ', '#####']);
});
