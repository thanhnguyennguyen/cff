const palindrome = require('./index.js');

test('test empty', () => {
    expect(palindrome('')).toEqual(true);
});

test('test string contain only one character', () => {
    expect(palindrome('abba')).toEqual(true);
});

test('test abba', () => {
    expect(palindrome('abba')).toEqual(true);
});

test('test abc', () => {
    expect(palindrome('abc')).toEqual(false);
});