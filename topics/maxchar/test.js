const maxchar = require('./index.js');
// put your tests here
test('test maxchar', () => {
    // test empty string
    expect(maxchar('')).toEqual('');

    // test string has only one character
    expect(maxchar('n')).toEqual('n');

    // abcdbb
    expect(maxchar('abcdbb')).toEqual('b');

    // aabbcde
    expect(maxchar('aabbcde')).toEqual('a');
});