const infixToPostFix = require('./index.js');
// put your tests here
test('test infixToPostFix', () => {
    expect(infixToPostFix("a+b*c+d")).toEqual("abc*+d+");
	expect(infixToPostFix("a*(b+c)+d")).toEqual("abc+*d+");
});

