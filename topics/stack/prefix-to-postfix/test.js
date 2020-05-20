const PrefixToPostfix = require('./index.js');
// put your tests here
test('test PrefixToPostfix', () => {
    expect(PrefixToPostfix("*a+bc")).toEqual("abc+*");
    expect(PrefixToPostfix("*+ab+cd")).toEqual("ab+cd+*");
});