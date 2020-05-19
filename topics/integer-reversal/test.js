const reverseInt = require('./index.js');
// put your tests here
test('test reverseInt', () => {
    expect(reverseInt(0)).toEqual(0);
    expect(reverseInt(6)).toEqual(6);
    expect(reverseInt(-6)).toEqual(-6);
    expect(reverseInt(123)).toEqual(321);
    expect(reverseInt(-912)).toEqual(-219);
    expect(reverseInt(100)).toEqual(1);
    expect(reverseInt(-800)).toEqual(-8);
});