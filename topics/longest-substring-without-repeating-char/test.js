const longest_substring_without_repeating_char = require('./index.js');
// put your tests here
test('test longest_substring_without_repeating_char', () => {
    expect(longest_substring_without_repeating_char('abcabcbb')).toEqual(3);
    expect(longest_substring_without_repeating_char('bbbbb')).toEqual(1);
    expect(longest_substring_without_repeating_char('pwwkew')).toEqual(3);
});
