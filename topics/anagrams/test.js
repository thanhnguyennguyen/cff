const {
    anagrams,
    anagrams2
} = require('./index.js');
// put your tests here
test('test anagrams', () => {
    expect(anagrams('nguyeN', 'nnuyeg')).toEqual(true);
    expect(anagrams('', '')).toEqual(true);
    expect(anagrams('nguyen 123', 'nnuyeg 213')).toEqual(true);
    expect(anagrams('nguyeN 123@#$', 'nnuyeg 213')).toEqual(true);
    expect(anagrams('nguyen 123', 'nnuyeg 21 3')).toEqual(true);
    expect(anagrams('nguyen 123 ', 'nnuyeg 23')).toEqual(false);
    expect(anagrams('ng@13(&', 'ng@12')).toEqual(false);
    expect(anagrams('ng@13(&', 'ngu@12')).toEqual(false);
    expect(anagrams('', 'ng@12')).toEqual(false);
});

test('test anagrams2', () => {
    expect(anagrams2('nguyeN', 'nnuyeg')).toEqual(true);
    expect(anagrams2('', '')).toEqual(true);
    expect(anagrams2('nguyen 123', 'nnuyeg 213')).toEqual(true);
    expect(anagrams2('nguyeN 123@#$', 'nnuyeg 213')).toEqual(true);
    expect(anagrams2('nguyen 123', 'nnuyeg 21 3')).toEqual(true);
    expect(anagrams2('nguyen 123 ', 'nnuyeg 23')).toEqual(false);
    expect(anagrams2('ng@13(&', 'ng@12')).toEqual(false);
    expect(anagrams2('ng@13(&', 'ngu@12')).toEqual(false);
    expect(anagrams2('', 'ng@12')).toEqual(false);
});