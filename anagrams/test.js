const anagrams = require('./index.js');
// put your tests here
test('test anagrams', () => {
    expect(anagrams('nguyen', 'nnuyeg')).toEqual(true);
    expect(anagrams('', '')).toEqual(true);
    expect(anagrams('nguyen 123', 'nnuyeg 213')).toEqual(true);
    expect(anagrams('nguyen 123@#$', 'nnuyeg 213@$#')).toEqual(true);
    expect(anagrams('nguyen 123', 'nnuyeg 21 3')).toEqual(false);
    expect(anagrams('nguyen 123 ', 'nnuyeg 23')).toEqual(false);
    expect(anagrams('ng@13(&', 'ng@12)&')).toEqual(false);
});
