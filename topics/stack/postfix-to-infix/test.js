const PostfixToInfix = require('./index.js');
// put your tests here
test('test PostfixToInfix', () => {
    expect(PostfixToInfix("*abc+*")).toEqual("a*(b+c)");
    expect(PostfixToInfix("ab+cd+*")).toEqual("(a+b)*(c+d)");
});
