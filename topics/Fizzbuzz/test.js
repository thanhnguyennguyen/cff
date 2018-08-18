const {fizz, buzz, fizzString, buzzString} = require ('./index.js');
// test fizz fucnction
test('test fizz', () => {
    expect(fizz(3)).toEqual(fizzString);
    expect(fizz(4)).toEqual('');
});

// test buzz fucnction
test('test buzz', () => {
    expect(buzz(3)).toEqual('');
    expect(buzz(5)).toEqual(buzzString);
});