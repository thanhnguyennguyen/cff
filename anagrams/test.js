const anagrams = require('./index.js');
// put your tests here
test('test anagrams', () => {
    expect(anagrams('nguyeN', 'nnuyeg')).toEqual(true);
    expect(anagrams('', '')).toEqual(true);
    expect(anagrams('nguyen 123', 'nnuyeg 213')).toEqual(true);
    expect(anagrams('nguyeN 123@#$', 'nnuyeg 213')).toEqual(true);
    expect(anagrams('nguyen 123', 'nnuyeg 21 3')).toEqual(true);
    expect(anagrams('nguyen 123 ', 'nnuyeg 23')).toEqual(true);
    expect(anagrams('ng@13(&', 'ng@12')).toEqual(true);
    expect(anagrams('ng@13(&', 'ngu@12')).toEqual(false);
    expect(anagrams('', 'ng@12')).toEqual(false);
});
