const {palindrome, palindrome2} = require('./index.js');

test('test palindrome with empty', () => {
    expect(palindrome('')).toEqual(true);
});

test('test palindrome with string contain only one character', () => {
    expect(palindrome('abba')).toEqual(true);
});

test('test palindrome with abba', () => {
    expect(palindrome('abba')).toEqual(true);
});

test('test palindrome with abc', () => {
    expect(palindrome('abc')).toEqual(false);
});

// test solution2
test('test palindrome2 with empty', () => {
    expect(palindrome2('')).toEqual(true);
});

test('test palindrome2 with string contain only one character', () => {
    expect(palindrome2('abba')).toEqual(true);
});

test('test palindrome2 with abba', () => {
    expect(palindrome2('abba')).toEqual(true);
});

test('test palindrome2 with abc', () => {
    expect(palindrome2('abc')).toEqual(false);
});