const vowels = require('./index.js');
// put your tests here
test('test vowels (regex solution)', () => {
    expect(vowels('Hi There!')).toEqual(3);
    expect(vowels('Why do you ask?')).toEqual(4);
    expect(vowels('Why?')).toEqual(0);
});
