const {
    vowels,
    vowels2
} = require('./index.js');
// put your tests here
test('test vowels (regex solution)', () => {
    expect(vowels('Hi There!')).toEqual(3);
    expect(vowels('Why do you ask?')).toEqual(4);
    expect(vowels('Why?')).toEqual(0);
});

test('test vowels2 (iteration solution)', () => {
    expect(vowels2('Hi There!')).toEqual(3);
    expect(vowels2('Why do you ask?')).toEqual(4);
    expect(vowels2('Why?')).toEqual(0);
});