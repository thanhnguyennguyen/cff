const fib = require('./index.js');
// put your tests here
test('fibonacci test', () => {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(5)).toEqual(5);
    expect(fib(15)).toEqual(610);
    expect(fib(17)).toEqual(1597);
    expect(fib(29)).toEqual(514229);
    expect(fib(47)).toEqual(2971215073);
});