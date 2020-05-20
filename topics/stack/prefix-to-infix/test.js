const PrefixToInfix = require('./index.js');
// put your tests here
test('test PrefixToInfix', () => {
    expect(PrefixToInfix("*a+bc")).toEqual("a*(b+c)");
    expect(PrefixToInfix("*+ab+cd")).toEqual("(a+b)*(c+d)");
});