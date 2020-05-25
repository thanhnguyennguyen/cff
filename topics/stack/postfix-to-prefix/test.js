const PostfixToPrefix = require('./index.js');
// put your tests here
test('test PostfixToPrefix', () => {
    expect(PostfixToPrefix("abc+*")).toEqual("*a+bc");
    expect(PostfixToPrefix("ab+cd+*")).toEqual("*+ab+cd");
});